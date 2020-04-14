import * as express from 'express';
import { Routes } from './routes';

class App {
  public readonly app: express.Application;
  private readonly routes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.setup();
    this.routes.routes(this.app);
  }

  setup(): void {
    this.app.use(express.json());
  }
}

export default new App().app;
