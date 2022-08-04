const supertest = require('supertest');
const mockaroVouchers = require('../mockaroo/vouchers');

const { app, server } = require('../dist/server.js');

const api = supertest(app);

const dataVouchers = mockaroVouchers.slice(0, Math.floor(Math.random() * 10));
const mountVoucher = Math.floor(Math.random() * 50000) + 10000000000;

describe('Test funcionalidad API /coupons', () => {
  test('POST /coupon => Obtener los productos si tengo suficiente monto (CUPO DISPONIBLE)', async () => {
    await api
      .post('/api/coupon')
      .expect('Content-Type', /json/)
      .send({
        item_ids: dataVouchers,
        amount: mountVoucher
      })
      .expect(200);
  });

  test('POST /coupon => Obtener un error si no tengo suficiente monto (CUPO NO DISPONIBLE)', async () => {
    await api
      .post('/api/coupon')
      .expect('Content-Type', /json/)
      .send({
        item_ids: ['MLA1144828035'],
        amount: 500
      })
      .expect(404);
  });

  afterAll(() => {
    server.close();
  });
});
