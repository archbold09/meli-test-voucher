import boom from '@hapi/boom';

interface Product {
  item_id: string;
}

class Vouchers {
  async getItemsWithVoucher(items: Array<Product>, amount: number) {
    const { getProducts } = require('./service');

    const resultProducts = await getProducts(items);

    if (!resultProducts.status) throw new Error('Error al obtener los datos de la API.');

    let totalToPay = 0;

    const result = [...new Set(resultProducts.data.map((item: Product) => item.item_id))]
      .map((item) => {
        const product = resultProducts.data.findIndex((product: Product) => product.item_id === item);

        if (product) {
          if (totalToPay < amount) {
            totalToPay += resultProducts.data[product].price;
            if (totalToPay > amount) {
              totalToPay -= resultProducts.data[product].price;
            } else {
              return item;
            }
          }
        }
      })
      .filter((item) => item !== undefined);

    if (result.length === 0) throw boom.notFound('Producto no encontrado');

    return {
      message: 'Productos descontados.',
      status: true,
      data: { item_ids: result, total: totalToPay }
    };
  }
}

export default new Vouchers();
