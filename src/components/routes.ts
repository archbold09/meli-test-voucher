import express, { Express } from 'express';
import vouchersRouter from './vouchers/routes';

export default (app: Express) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/coupon', vouchersRouter);
};
