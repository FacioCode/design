import { TypographyProps } from "./Typography.types";
import { componentMapping } from "./componentMapping";

type Args = {
  component: TypographyProps["component"],
  paragraph: TypographyProps["paragraph"],
  variant: TypographyProps["variant"]
}

export const getTypographyComponent = ({ component, paragraph, variant }: Args) => {
  const defaultComponent : TypographyProps["component"] = "span";

  if (component) {
    return component;
  }
  if (paragraph) {
    return "p" as TypographyProps["component"];
  }
  if (componentMapping[variant]) {
    return componentMapping[variant];
  }

  return defaultComponent;
};
