import boom from '@hapi/boom';

interface Product {
  item_id: string;
}

class Vouchers {
  async getItemsWithVoucher(items: Array<Product>, amount: number) {
    const { getProducts } = require('./service');

    const resultProducts = await getProducts(items);

    if (resultProducts.code === 'ERR_BAD_REQUEST') throw new Error(resultProducts.response.data.message);
    if (!resultProducts.status) throw new Error('Error al obtener los datos de la API.');

    let totalToPay = 0;

    const result = [...new Set(resultProducts.data.sort((first: any, second: any) => first.price - second.price).map((item: Product) => item.item_id))]
      .map((item) => {
        const product = resultProducts.data.find((product: Product) => product.item_id === item);

        if (product) {
          if (totalToPay < amount) {
            totalToPay += product.price;
            if (totalToPay > amount) {
              totalToPay -= product.price;
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
      data: { item_ids: result, total: Number(totalToPay.toFixed(2)) }
    };
  }
}

export default new Vouchers();
