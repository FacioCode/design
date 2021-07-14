import * as React from "react";

import { CalendarIcon } from "@svg-icons/CalendarIcon";
import { FreeIcon } from "@svg-icons/FreeIcon";
import { LabeledItem } from "@components/LabeledItem";
import { ListInstallmentItemProps } from "./ListInstallmentItem.types";
import { ListItem } from "@components/ListItem";
import { ListItemIcon } from "@components/ListItemIcon";
import { ListItemText } from "@components/ListItemText";
import { PaidIcon } from "@components/SvgIcon";
import { Time } from "@components/Time";
import { WarningIcon } from "@svg-icons/WarningIcon";
import { Skeleton } from "@components/Skeleton";

export type { ListInstallmentItemProps } from "./ListInstallmentItem.types";

export const ListInstallmentItem = React.forwardRef<unknown, ListInstallmentItemProps>(
  (props: ListInstallmentItemProps, ref: ListInstallmentItemProps["ref"]) => {
    const {
      billingDate,
      children,
      label,
      loading,
      variant = "pending",
    } = props;

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
        if (loading) {
          return <Skeleton height={24} variant={"circle"} width={24} />;
        }
        switch (variant) {
        case "delayed": return <WarningIcon color={"error"} />;
        case "paid": return <PaidIcon />;
        case "zero": return <FreeIcon color={"disabled"} />;
        default: return <CalendarIcon color={"inherit"} />;
        }
      },
      [loading, variant],
    );

    const listIconContainerColor = React.useMemo(
      () => {
        if (variant === "delayed") {
          return "error";
        }

        return "default";
      }, [variant],
    );

    const Wrapper = React.useMemo(
      () => {
        if (variant === "zero" && !loading) {
          return "del";
        }

        return "span";
      },
      [loading, variant],
    );

    const secondaryContent = React.useMemo(
      () => {
        if (loading) {
          return (<Skeleton />);
        }
        if (billingDate) {
          return (<Time dateStyle={"medium"}>{billingDate}</Time>);
        }

        return null;
      },
      [billingDate, loading],
    );

    return (
      <ListItem ref={ref} {...props}>
        <ListItemIcon color={listIconContainerColor}>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Wrapper>
              <LabeledItem
                color={"textPrimary"}
                label={label}
                loading={loading}
                variant={"bodyText2"}>
                {children}
              </LabeledItem>
            </Wrapper>
          }
          secondary={secondaryContent}
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
