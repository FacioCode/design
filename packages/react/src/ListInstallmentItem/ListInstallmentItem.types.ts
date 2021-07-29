import { LabeledItemProps } from "@components/LabeledItem";
import { ListItemProps } from "@components/ListItem";
import { TimeProps } from "@components/Time";

type InstallmentVariant = "paid" | "delayed" | "pending" | "zero";

export interface ListInstallmentItemProps {
  "aria-label"?: ListItemProps["aria-label"];
  billingDate?: TimeProps["children"];
  children?: LabeledItemProps["children"];

  /**
   * @required
   */
  label: LabeledItemProps["label"];

  loading?: LabeledItemProps["loading"];
  ref?: ListItemProps["ref"];

  /**
   * @default "pending"
   * @optional
   */
  variant?: InstallmentVariant;
}
