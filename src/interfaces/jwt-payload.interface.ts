import { RoleEnum } from "../enums/role.enum";

export interface IJWTPayload {
  userId: string;
  role: RoleEnum;
}
