import { userRepository } from "../repositories/user.repository";
import { IUser } from "../user.interface";

class UserService {
  public async getList(): Promise<IUser[]> {
    return await userRepository.getList();
  }
  public async create(dto: Partial<IUser>): Promise<IUser> {
    return await userRepository.create(dto);
  }
}

export const userService = new UserService();
