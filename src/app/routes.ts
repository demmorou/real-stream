import { Application } from 'express';
import { UserController } from './controllers/UserController';

export class Routes {
  private readonly userController: UserController = new UserController();

  routes(app: Application): void {
    app.post('/users', this.userController.store);
  }
}
