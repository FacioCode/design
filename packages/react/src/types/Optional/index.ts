import { Omit } from "@material-ui/types";

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;
