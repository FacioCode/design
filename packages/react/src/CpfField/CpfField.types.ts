import type { TextFieldProps } from "@components/TextField";

export type CpfFieldProps = Omit<TextFieldProps, "maxRows" | "rowsMax" | "type">;
