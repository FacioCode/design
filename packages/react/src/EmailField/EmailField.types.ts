import type { TextFieldProps } from "@components/TextField";

export type EmailFieldProps = Omit<TextFieldProps, "maxRows" | "rowsMax" | "type">
