import joi from 'joi';

const array = joi.array();
const amount = joi.number().min(1);

const getProductsSchema = joi.object({
  item_ids: array.required(),
  amount: amount.required()
});

export { getProductsSchema };
