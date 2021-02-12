/* eslint-disable sort-keys */

import { customProperties } from "@faciocode/styles";

export const MuiAlert = {
  icon: customProperties.alertStyles.icon,
  message: customProperties.alertStyles.message,
  root: customProperties.alertStyles.root,
  filledError: {
    ...customProperties.alertStyles.filledError,
    "& $icon": customProperties.alertStyles.filledErrorIcon,
    "& $message": customProperties.alertStyles.filledErrorMessage,
  },
  filledInfo: customProperties.alertStyles.filledInfo,
  filledWarning: customProperties.alertStyles.filledWarning,
  standardError: {
    ...customProperties.alertStyles.standardError,
    "& $icon": customProperties.alertStyles.standardErrorIcon,
    "& $message": customProperties.alertStyles.standardErrorMessage,
  },
  standardInfo: customProperties.alertStyles.standardInfo,
  standardWarning: customProperties.alertStyles.standardWarning,
};

export default MuiAlert;
