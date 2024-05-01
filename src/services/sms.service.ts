import { Twilio } from "twilio";

import { config } from "../configs/config";

class SmsService {
  constructor(
    private readonly client = new Twilio(
      config.TWILIO_ACCOUNT_SID,
      config.TWILIO_AUTH_TOKEN,
    ),
  ) {}

  public async sendSms(phone: string, message: string): Promise<void> {
    try {
      await this.client.messages.create({
        to: phone,
        body: message,
        messagingServiceSid: config.TWILIO_SERVICE_SID,
      });
    } catch (error) {
      console.error("Error sms: ", error);
    }
  }
}

export const smsService = new SmsService();
