import { EmailTypeEnum } from "../enums/email-type.enum";
import { EmailCombinedPayloadType } from "./email-combined-payload.type";
import { PickRequired } from "./pick-required.type";

export type EmailTypeToPayloadType = {
  [EmailTypeEnum.WELCOME]: PickRequired<
    EmailCombinedPayloadType,
    "name" | "frontUrl" | "actionToken"
  >;

  [EmailTypeEnum.RESET_PASSWORD]: PickRequired<
    EmailCombinedPayloadType,
    "frontUrl" | "actionToken"
  >;

  [EmailTypeEnum.DELETE_ACCOUNT]: PickRequired<
    EmailCombinedPayloadType,
    "frontUrl"
  >;

  [EmailTypeEnum.OLD_VISITOR]: PickRequired<
    EmailCombinedPayloadType,
    "frontUrl" | "name"
  >;

  [EmailTypeEnum.LOGOUT]: PickRequired<EmailCombinedPayloadType, "name">;
};
