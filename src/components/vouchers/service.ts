import axios from 'axios';
import config from '../../config/index';
import boom from '@hapi/boom';

const API = config.apiConfig.API_MERCADO_LIBRE;

const getProducts = async (itemsId: Array<string>) => {
  try {
    const stringIds: string = itemsId.join(',');

    const result = await axios({
      method: 'GET',
      url: `${API}/items?ids=${stringIds}`
    });

    if (result.status !== 200) throw boom.badRequest('Error al conectar con la API');

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
  } catch (error) {
    return error;
  }
};

module.exports = { getProducts };
