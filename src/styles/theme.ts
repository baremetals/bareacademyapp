import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    backgroundColor: string;
    isOpen?: string;
  }
}


export const lightTheme: DefaultTheme = {
  primary: "#333",
  secondary: "#666",
  backgroundColor: "#fff",
};
export const darkTheme: DefaultTheme = {
  primary: "#fff",
  secondary: "#cacaca",
  backgroundColor: "#333",
};

