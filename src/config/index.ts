import dotenv from 'dotenv';
dotenv.config();

export default {
  mainConfig: {
    PORT: process.env.PORT
  },
  apiConfig: {
    API_AVIONAPI: process.env.API_AVIONAPI
  }
};
