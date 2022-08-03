interface Product {
  item_id: string;
  price: number;
}

class Vouchers {
  getItemsWithVoucher(items: Array<Product>, amount: number) {
    let totalToPay = 0;

    const result = items
      .map((item) => {
        if (totalToPay < amount) {
          totalToPay += item.price;
          if (totalToPay > amount) {
            totalToPay -= item.price;
          } else {
            return item.item_id;
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
