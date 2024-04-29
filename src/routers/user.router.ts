import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getList);

router.get("/:userId", commonMiddleware.isIdValid, userController.getById);
router.put(
  "/:userId",
  authMiddleware.checkAccessToken,
  commonMiddleware.isBodyValid(UserValidator.update),
  commonMiddleware.isIdValid,
  userController.updateById,
);
router.delete(
  "/:userId",
  commonMiddleware.isIdValid,
  userController.deleteById,
);

export const userRouter = router;
