import { createContext } from "react";

export type RadioGroupCtx = {
  name: string;
  value: string;
  onChange: (next: string) => void;
  disabled?: boolean;
};

export const RadioGroupContext = createContext<RadioGroupCtx | null>(null);

