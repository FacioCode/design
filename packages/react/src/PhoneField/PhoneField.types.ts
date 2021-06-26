import type { TextFieldProps } from "@components/TextField";

export type PhoneFieldProps = Omit<TextFieldProps, "maxRows" | "rowsMax" | "type">;
