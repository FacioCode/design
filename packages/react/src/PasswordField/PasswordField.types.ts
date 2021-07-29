import type { TextFieldProps } from "@components/TextField";

export type PasswordFieldProps = Omit<TextFieldProps, "maxRows" | "rowsMax" | "type">;
