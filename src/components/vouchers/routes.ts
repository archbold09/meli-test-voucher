import express, { Request, Response, NextFunction } from 'express';
import voucherClass from './controller';
import validatorHandler from '../../middlewares/validatorHandler';
import { getProductsSchema } from './schema';

const router = express.Router();

router.post('/', validatorHandler(getProductsSchema, 'body'), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { item_ids, amount } = req.body;

    const result = await voucherClass.getItemsWithVoucher(item_ids, amount);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

export default router;
