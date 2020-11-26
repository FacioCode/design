import { kebabCase } from "lodash";

type Args = {
  classKey: string,
  component: string,
  property: string
}

type GetCssVarName = ({ classKey, component, property }: Args) => string;

export const getCssVarName : GetCssVarName = ({ classKey, component, property }: Args) => (
  `var(--component-${kebabCase(component)}-${kebabCase(classKey)}-${kebabCase(property)})`
);

export default getCssVarName;
