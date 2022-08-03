import express, { Request, Response } from 'express';
import voucherClass from './controller';
const router = express.Router();

router.post('/', (req: Request, res: Response) => {
  const { item_ids, amount } = req.body;

  const result = voucherClass.getItemsWithVoucher(item_ids, amount);

  if (result.canYouPay === false) return res.status(404).send('404-NOT_FOUND');

  res.status(200).json(result);
});

export default router;
