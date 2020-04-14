import { Request, Response } from 'express';

export class SessionController {
  async store(req: Request, res: Response) {
    return res.status(200).json({ ok: true });
  }
}
