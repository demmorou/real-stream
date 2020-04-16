import { Request, Response } from 'express';
import User from '../models/UserModel';

export class UserController {
  async store(req: Request, res: Response) {
    const { body } = req;

    const userExists = await User.findOne({ where: { email: body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create<User>(body);

    if (!user) {
      return res.status(400).json({ error: 'User not save!' });
    }

    const { id, email, name, createdAt, updatedAt } = user;

    return res.status(200).json({
      id,
      email,
      name,
      createdAt,
      updatedAt,
    });
  }
}
