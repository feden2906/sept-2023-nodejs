import { NextFunction, Request, Response } from "express";

import { IJWTPayload } from "../interfaces/jwt-payload.interface";
import { IToken } from "../interfaces/token.interface";
import { IUser } from "../interfaces/user.interface";
import { authService } from "../services/auth.service";

class AuthController {
  public async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as Partial<IUser>;
      const data = await authService.signUp(dto);
      res.status(201).json(data);
    } catch (e) {
      next(e);
    }
  }

  public async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as { email: string; password: string };
      const data = await authService.signIn(dto);
      res.status(201).json(data);
    } catch (e) {
      next(e);
    }
  }

  public async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const jwtPayload = req.res.locals.jwtPayload as IJWTPayload;
      const tokenPair = req.res.locals.tokenPair as IToken;

      const data = await authService.refresh(jwtPayload, tokenPair);
      res.status(201).json(data);
    } catch (e) {
      next(e);
    }
  }
}

export const authController = new AuthController();
