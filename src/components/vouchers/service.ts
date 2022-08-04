import axios from 'axios';
import config from '../../config/index';

const API = config.apiConfig.API_MERCADO_LIBRE;

const getProducts = async (itemsId: Array<string>) => {
  const stringIds: string = itemsId.join(',');

  const result = await axios({
    method: 'GET',
    url: `${API}/items?ids=${stringIds}`
  });

  if (result.status !== 200)
    return {
      status: false,
      data: null
    };

  return {
    status: true,
    data: result.data
      .map((item: any) => {
        if (item.code === 200) {
          return {
            item_id: item.body.id,
            price: item.body.price
          };
        }
      })
      .filter((item: any) => item !== undefined)
  };
};

module.exports = { getProducts };
