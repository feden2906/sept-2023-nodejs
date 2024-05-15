import { EmailTypeEnum } from "../enums/email-type.enum";

export const emailTemplateConstant = {
  [EmailTypeEnum.WELCOME]: {
    templateId: "d-69fc4a672db74ff78d46aadcc43a64e5",
  },
  [EmailTypeEnum.RESET_PASSWORD]: {
    templateId: "d-85371f1cedd346f59e60ad65014f4ade",
  },
  [EmailTypeEnum.DELETE_ACCOUNT]: {
    templateId: "d-425c89d67efb4f63b80524e934967b89",
  },
  [EmailTypeEnum.LOGOUT]: {
    templateId: "d-790ccdeffa164188afd65ecc563fc35d",
  },
  [EmailTypeEnum.OLD_VISITOR]: {
    templateId: "d-ee85ebab131d4ae0b7853781351801cf",
  },
};
