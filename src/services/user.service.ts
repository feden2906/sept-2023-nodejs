import { ApiError } from "../errors/api-error";
import { IUser } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";
import { smsPrepareService } from "./sms-prepare.service";

class UserService {
  public async getList(): Promise<IUser[]> {
    return await userRepository.getList();
  }

  public async getById(userId: string): Promise<IUser> {
    return await this.findUserOrThrow(userId);
  }

  public async getMe(userId: string): Promise<IUser> {
    return await this.findUserOrThrow(userId);
  }

  public async updateMe(userId: string, dto: Partial<IUser>): Promise<IUser> {
    await this.findUserOrThrow(userId);
    return await userRepository.updateById(userId, dto);
  }

  public async deleteMe(userId: string): Promise<void> {
    const user = await this.findUserOrThrow(userId);
    await userRepository.updateById(userId, { isDeleted: true });

    await smsPrepareService.deleteAccount(user.phone, { name: user.name });
  }

  private async findUserOrThrow(userId: string): Promise<IUser> {
    const user = await userRepository.getById(userId);
    if (!user) {
      throw new ApiError("user not found", 404);
    }
    return user;
  }
}

export const userService = new UserService();
