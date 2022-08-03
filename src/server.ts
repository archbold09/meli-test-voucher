import express, { Express } from 'express';
import config from './config/index';
import routerApi from './components/routes';

const app: Express = express();
app.use(express.json());

routerApi(app);

const server = app.listen(config.mainConfig.PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${config.mainConfig.PORT}`);
});

export default server;
