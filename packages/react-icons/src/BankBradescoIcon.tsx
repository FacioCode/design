/* eslint-disable indent, max-len */
import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

/**
 * Icon for Bradesco Bank
 *
 * @example
 * ```jsx
 * <BankBradescoIcon titleAccess={"Icon for Bradesco Bank"} />
 * ```
 */
export const BankBradescoIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fillRule="evenodd" d="M10.251 17.543v4.271a.18.18 0 0 0 .186.186h1.186v-5.471l-1.186.686a.361.361 0 0 0-.186.328zm1.2-10.485c-1.157 0-2.429.114-3.687.329A7.022 7.022 0 0 1 13.296 4.7c1.658 0 3.316.614 4.43 1.557.2.172.358.186.515.029.157-.143.143-.3-.029-.5C16.755 4.1 14.611 2.958 12.095 3c-3.302.057-6.103 2.157-7.175 5.043-.972.3-1.872.671-2.673 1.114-.214.128-.3.271-.214.457.071.171.229.229.443.171.686-.2 1.386-.357 2.115-.528a6.408 6.408 0 0 0-.128 1.186c-.058 2.67 1.372 5.2 3.559 6.585.214.143.4.143.528-.029.129-.171.115-.328-.071-.485-1.386-1.257-2.173-3.114-2.173-4.957 0-.929.186-1.829.544-2.643A29.738 29.738 0 0 1 9.236 8.8c5.646 0 10.406 1.857 10.406 4.3 0 1.228-1.573 2.47-3.43 3.3-.444.2-.5.342-.43.528.058.186.272.243.5.171C19.543 16.03 22 14.272 22 12.158c0-2.886-4.66-5.1-10.548-5.1zm2.288 8.257-1.572.9v5.77h1.686c.172 0 .3-.128.3-.3V15.53c0-.229-.228-.314-.414-.214z"/>
    </SvgIcon>
  ),
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  BankBradescoIcon.displayName = "BankBradescoIcon";
}
