interface Product {
  item_id: string;
  price: number;
}

class Vouchers {
  getItemsWithVoucher(items: Array<Product>, amount: number) {
    let totalToPay = 0;

    const result = [...new Set(items.map((item) => item.item_id))]
      .map((item) => {
        const product = items.findIndex((product) => product.item_id === item);
        if (product) {
          if (totalToPay < amount) {
            totalToPay += items[product].price;
            if (totalToPay > amount) {
              totalToPay -= items[product].price;
            } else {
              return item;
            }
          }
        }
      })
      .filter((item) => item !== undefined);

    if (result.length === 0) {
      return {
        canYouPay: false
      };
    }

    return {
      canYouPay: true,
      item_ids: result,
      total: totalToPay
    };
  }
}

export default new Vouchers();
