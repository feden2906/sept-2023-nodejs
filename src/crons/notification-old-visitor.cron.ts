import { CronJob } from "cron";

import { config } from "../configs/config";
import { EmailTypeEnum } from "../enums/email-type.enum";
import { TimeHelper } from "../helpers/time.helper";
import { userRepository } from "../repositories/user.repository";
import { sendGridService } from "../services/send-grid.service";

const handler = async () => {
  try {
    console.log("[START CRON] Notify old visitors");
    const date = TimeHelper.subtractByParams(1, "day");
    const users = await userRepository.findWithOutActivityAfter(date);

    await Promise.all(
      users.map(async (user) => {
        return await sendGridService.sendByType(
          user.email,
          EmailTypeEnum.OLD_VISITOR,
          { frontUrl: config.FRONT_URL, name: user.name },
        );
      }),
    );
  } catch (error) {
    console.error("notifyOldVisitors: ", error);
  } finally {
    console.log("[END CRON] Notify old visitors");
  }
};

export const notifyOldVisitors = new CronJob("* * * 4 * *", handler);
