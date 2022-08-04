import dotenv from 'dotenv';
dotenv.config();

export default {
  mainConfig: {
    PORT: process.env.PORT
  },
  apiConfig: {
    API_MERCADO_LIBRE: process.env.API_MERCADO_LIBRE
  }
};
