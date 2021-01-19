import { LinkProps as MaterialLinkProps } from "@material-ui/core/Link";

export type LinkProps = Omit<MaterialLinkProps, "css">;
