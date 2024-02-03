import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../configs/config';

export const authenticateMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, config.secret_key, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
interface CustomRequest extends Request {
  user?: any;
}
