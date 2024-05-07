import { FilterQuery } from "mongoose";

import { IToken } from "../interfaces/token.interface";
import { ActionToken } from "../models/action-token.model";
import { Token } from "../models/token.model";

class TokenRepository {
  public async create(dto: IToken): Promise<IToken> {
    return await Token.create(dto);
  }

  public async findByParams(params: FilterQuery<IToken>): Promise<IToken> {
    return await Token.findOne(params);
  }

  public async deleteById(id: string): Promise<void> {
    await Token.deleteOne({ _id: id });
  }

  public async deleteByParams(params: FilterQuery<IToken>): Promise<void> {
    await ActionToken.deleteMany(params);
  }
}

export const tokenRepository = new TokenRepository();
