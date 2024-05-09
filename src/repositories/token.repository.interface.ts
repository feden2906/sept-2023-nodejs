import { FilterQuery } from "mongoose";

import { IToken } from "../interfaces/token.interface";

export abstract class TokenRepositoryInterface {
  public abstract create(dto: IToken): Promise<IToken>;

  public abstract findByParams(params: FilterQuery<IToken>): Promise<IToken>;
  public abstract findManyByParams(
    params: FilterQuery<IToken>,
  ): Promise<IToken[]>;

  public abstract deleteById(id: string): Promise<void>;

  public abstract deleteByParams(params: FilterQuery<IToken>): Promise<void>;
}
