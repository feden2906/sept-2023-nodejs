import { SmsTypeEnum } from "../enums/sms-type.enum";

export const smsTemplateConstant = {
  [SmsTypeEnum.WELCOME]: (name: string) => `Hey ${name}! Welcome to our app`,
  [SmsTypeEnum.DELETE_ACCOUNT]: (name: string) =>
    `Hey ${name}! Your account was deleted`,
};
