import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";

import { IJWTPayload } from "../interfaces/jwt-payload.interface";
import { IUser } from "../interfaces/user.interface";
import { UserPresenter } from "../presenters/user.presenter";
import { userService } from "../services/user.service";

class UserController {
  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getList();
      const response = UserPresenter.toPublicResponseListDto(users);
      res.json(response);
    } catch (e) {
      next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId;
      const user = await userService.getById(userId);
      const response = UserPresenter.toPublicResponseDto(user);
      res.json(response);
    } catch (e) {
      next(e);
    }
  }

  public async getMe(req: Request, res: Response, next: NextFunction) {
    try {
      const jwtPayload = req.res.locals.jwtPayload as IJWTPayload;
      const user = await userService.getMe(jwtPayload.userId);
      const response = UserPresenter.toPrivateResponseDto(user);
      res.json(response);
    } catch (e) {
      next(e);
    }
  }

  public async updateMe(req: Request, res: Response, next: NextFunction) {
    try {
      const jwtPayload = req.res.locals.jwtPayload as IJWTPayload;
      const dto = req.body as Partial<IUser>;

      const user = await userService.updateMe(jwtPayload.userId, dto);
      const response = UserPresenter.toPrivateResponseDto(user);
      res.status(201).json(response);
    } catch (e) {
      next(e);
    }
  }

  public async deleteMe(req: Request, res: Response, next: NextFunction) {
    try {
      const jwtPayload = req.res.locals.jwtPayload as IJWTPayload;
      await userService.deleteMe(jwtPayload.userId);
      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  }

  public async uploadAvatar(req: Request, res: Response, next: NextFunction) {
    try {
      const jwtPayload = req.res.locals.jwtPayload as IJWTPayload;
      const avatar = req.files?.avatar as UploadedFile;

      const user = await userService.uploadAvatar(jwtPayload.userId, avatar);
      const response = UserPresenter.toPrivateResponseDto(user);
      res.status(201).json(response);
    } catch (e) {
      next(e);
    }
  }

  public async deleteAvatar(req: Request, res: Response, next: NextFunction) {
    try {
      const jwtPayload = req.res.locals.jwtPayload as IJWTPayload;

      const user = await userService.deleteAvatar(jwtPayload.userId);
      const response = UserPresenter.toPrivateResponseDto(user);
      res.status(201).json(response);
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
