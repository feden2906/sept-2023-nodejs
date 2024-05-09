import { removeOldTokens } from "./remove-old-tokens.cron";
import { testCron } from "./test.cron";

export const runCronJobs = () => {
  testCron.start();
  removeOldTokens.start();
};
