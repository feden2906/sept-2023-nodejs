import { smsTemplateConstant } from "../constants/sms-template.constant";
import { SmsTypeEnum } from "../enums/sms-type.enum";
import { smsService } from "./sms.service";

class SmsPrepareService {
  public async register(phone: string, data: { name: string }): Promise<void> {
    const message = smsTemplateConstant[SmsTypeEnum.WELCOME](data.name);

    await smsService.sendSms(phone, message);
  }

  public async deleteAccount(
    phone: string,
    data: { name: string },
  ): Promise<void> {
    const message = smsTemplateConstant[SmsTypeEnum.DELETE_ACCOUNT](data.name);

    await smsService.sendSms(phone, message);
  }
}

export const smsPrepareService = new SmsPrepareService();
