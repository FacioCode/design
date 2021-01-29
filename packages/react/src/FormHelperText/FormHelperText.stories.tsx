import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Currency } from "../Currency";
import { FormHelperText } from "./FormHelperText";
import { FormHelperTextProps } from "./FormHelperText.types";

export default {
  component: FormHelperText,
  title: "Utilities/Form Helper Text",
} as Meta;

const Template : Story<FormHelperTextProps> = (props: FormHelperTextProps) => (
  <FormHelperText {...props} />
);

export const Playground : Story<FormHelperTextProps> = Template.bind({});
Playground.args = {
  children: <>
    Parcela mínima de <Currency code={"BRL"}>100</Currency>
    {" "}
    e máxima de <Currency code={"BRL"}>700</Currency>.
  </>,
};
