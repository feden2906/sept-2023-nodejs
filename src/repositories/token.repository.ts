import { FilterQuery } from "mongoose";

import { IToken } from "../interfaces/token.interface";
import { Token } from "../models/token.model";
import { TokenRepositoryInterface } from "./token.repository.interface";

class TokenRepository implements TokenRepositoryInterface {
  public async create(dto: IToken): Promise<IToken> {
    return await Token.create(dto);
  }

  public async findByParams(params: FilterQuery<IToken>): Promise<IToken> {
    return await Token.findOne(params);
  }

  public async findManyByParams(
    params: FilterQuery<IToken>,
  ): Promise<IToken[]> {
    return await Token.find(params);
  }

  public async deleteById(id: string): Promise<void> {
    await Token.deleteOne({ _id: id });
  }

  public async deleteByParams(params: FilterQuery<IToken>): Promise<void> {
    await Token.deleteMany(params);
  }
}

export const tokenRepository = new TokenRepository();
