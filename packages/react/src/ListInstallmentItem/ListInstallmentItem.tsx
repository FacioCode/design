import * as React from "react";

import { FreeIcon } from "@svg-icons/FreeIcon";
import { HourglassIcon } from "@svg-icons/HourglassIcon";
import { LabeledItem } from "@components/LabeledItem";
import { ListInstallmentItemProps } from "./ListInstallmentItem.types";
import { ListItem } from "@components/ListItem";
import { ListItemIcon } from "@components/ListItemIcon";
import { ListItemText } from "@components/ListItemText";
import { PaidIcon } from "@components/SvgIcon";
import { Time } from "@components/Time";
import { WaitingIcon } from "@svg-icons/WaitingIcon";

export type { ListInstallmentItemProps } from "./ListInstallmentItem.types";

export const ListInstallmentItem = React.forwardRef<unknown, ListInstallmentItemProps>(
  (props: ListInstallmentItemProps, ref: ListInstallmentItemProps["ref"]) => {
    const {
      billingDate,
      children,
      label,
      variant = "pending",
    } = props;

    const labelColor = React.useMemo(
      () => {
        if (variant === "delayed") {
          return "error";
        }

        return "textPrimary";
      },
      [variant],
    );

    const timeColor = React.useMemo(
      () => {
        if (variant === "delayed") {
          return "error";
        }

        if (variant === "pending") {
          return "textPrimary";
        }

        return "textSecondary";
      },
      [variant],
    );

    const icon = React.useMemo<JSX.Element>(
      () => {
        switch (variant) {
        case "delayed": return <HourglassIcon color={"error"} />;
        case "paid": return <PaidIcon color={"primary"} />;
        case "zero": return <FreeIcon color={"disabled"} />;
        default: return <WaitingIcon />;
        }
      },
      [variant],
    );

    const Wrapper = React.useMemo(
      () => {
        if (variant === "zero") {
          return "del";
        }

        return "span";
      },
      [variant],
    );

    return (
      <ListItem ref={ref} {...props}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Wrapper>
              <LabeledItem color={labelColor} label={label}>
                {children}
              </LabeledItem>
            </Wrapper>
          }
          secondary={
            billingDate && <Time dateStyle={"medium"}>{billingDate}</Time>
          }
          secondaryTypographyProps={{ color: timeColor }}
        />
      </ListItem>
    );
  },
);

// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== "production") {
  ListInstallmentItem.displayName = "ListInstallmentItem";
}
