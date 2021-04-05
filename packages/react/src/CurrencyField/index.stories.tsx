import * as React from "react";
import { CurrencyField, CurrencyFieldProps } from "@components/CurrencyField";
import type { Meta, Story } from "@storybook/react";
import { ContainedButton } from "@components/Button";
import { LabeledCurrency } from "@components/LabeledCurrency";

export default {
  component: CurrencyField,
  title: "Components/Currency Field",
} as Meta;

const UncontrolledTemplate : Story<CurrencyFieldProps> = (props: CurrencyFieldProps) => (
  <CurrencyField {...props} />
);

const ControlledTemplate : Story<CurrencyFieldProps> = (props: CurrencyFieldProps) => {
  // eslint-disable-next-line no-magic-numbers
  const [value, setValue] = React.useState<CurrencyFieldProps["value"]>(props.value || 0);

  const handleChange = React.useCallback<CurrencyFieldProps["onChange"]>(
    (event) => {
      setValue(event.target.value);
    },
    [setValue],
  );

  const currencyValue = React.useMemo(
    () => {
      if (typeof value === "string") {
        return Number(value.replace(",", "."));
      }

      if (typeof value === "number") {
        return value;
      }

      // eslint-disable-next-line no-magic-numbers
      return 0;
    },
    [value],
  );

  const handleFormSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
    (event) => event.preventDefault(), [],
  );

  return (
    <form onSubmit={handleFormSubmit}>
      <CurrencyField
        {...props}
        onChange={handleChange}
        value={value}
      />
      <LabeledCurrency
        key={"labeledCurrency"}
        value={currencyValue}>
        Valor total
      </LabeledCurrency>
      <ContainedButton type={"submit"}>Antecipar</ContainedButton>
    </form>
  );
};

export const Uncontrolled : Story<CurrencyFieldProps> = UncontrolledTemplate.bind({});
Uncontrolled.args = {
  id: "uncontrolled",
  label: "Valor do input não-controlado",
};

export const Controlled : Story<CurrencyFieldProps> = ControlledTemplate.bind({});
Controlled.args = {
  id: "controlled",
  label: "Valor do input controlado",
};

export const DecimalUncontrolled : Story<CurrencyFieldProps> = UncontrolledTemplate.bind({});
DecimalUncontrolled.args = {
  ...Uncontrolled.args,
  id: "decimal-uncontrolled",
  inputMode: "decimal",
};

export const DecimalControlled : Story<CurrencyFieldProps> = ControlledTemplate.bind({});
DecimalControlled.args = {
  ...Controlled.args,
  id: "decimal-input-mode",
  inputMode: "decimal",
};

export const NumericUncontrolled : Story<CurrencyFieldProps> = UncontrolledTemplate.bind({});
NumericUncontrolled.args = {
  ...Uncontrolled.args,
  id: "numeric-uncontrolled",
  inputMode: "numeric",
};

export const NumericControlled : Story<CurrencyFieldProps> = ControlledTemplate.bind({});
NumericControlled.args = {
  ...Controlled.args,
  id: "numeric-uncontrolled",
  inputMode: "numeric",
};

export const RequiredUncontrolled : Story<CurrencyFieldProps> = UncontrolledTemplate.bind({});
RequiredUncontrolled.args = {
  ...Uncontrolled.args,
  id: "required-uncontrolled",
  required: true,
};

export const RequiredControlled : Story<CurrencyFieldProps> = ControlledTemplate.bind({});
RequiredControlled.args = {
  ...Controlled.args,
  id: "required-controlled",
  required: true,
};

export const FullWidthUncontrolled : Story<CurrencyFieldProps> = UncontrolledTemplate.bind({});
FullWidthUncontrolled.args = {
  ...Uncontrolled.args,
  fullWidth: true,
  id: "full-width-uncontrolled",
};

export const FullWidthControlled : Story<CurrencyFieldProps> = ControlledTemplate.bind({});
FullWidthControlled.args = {
  ...Controlled.args,
  fullWidth: true,
  id: "full-width-controlled",
};

export const LimitUncontrolled : Story<CurrencyFieldProps> = UncontrolledTemplate.bind({});
LimitUncontrolled.args = {
  ...Uncontrolled.args,
  helperText: "Informe um valor entre 0 e 500",
  id: "limit-uncontrolled",
  label: "Valor do input não controlado",
  max: 500,
  min: 0,
  name: "limit-uncontrolled",
};

export const LimitControlled : Story<CurrencyFieldProps> = ControlledTemplate.bind({});
LimitControlled.args = {
  ...Controlled.args,
  ...LimitUncontrolled.args,
  id: "limit-controlled",
  name: "limit-controlled",
};

export const AllowRecordingUncontrolled : Story<CurrencyFieldProps> = UncontrolledTemplate.bind({});
AllowRecordingUncontrolled.args = {
  ...Uncontrolled.args,
  allowRecording: true,
  id: "allow-recording-uncontrolled",
};

export const AllowRecordingControlled : Story<CurrencyFieldProps> = UncontrolledTemplate.bind({});
AllowRecordingControlled.args = {
  ...Controlled.args,
  allowRecording: true,
  id: "allow-recording-controlled",
};

export const LargeUncontrolled : Story<CurrencyFieldProps> = UncontrolledTemplate.bind({});
LargeUncontrolled.args = {
  ...Uncontrolled.args,
  id: "large-uncontrolled",
  size: "large",
};

export const LargeControlled : Story<CurrencyFieldProps> = ControlledTemplate.bind({});
LargeControlled.args = {
  ...Controlled.args,
  id: "large-controlled",
  size: "large",
};
