import { Application } from 'express';
import { SessionController } from './controllers/SessionController';

export class Routes {
  private readonly sessionControoler: SessionController = new SessionController();

  routes(app: Application): void {
    app.get('/sessions', this.sessionControoler.store);
  }
}
