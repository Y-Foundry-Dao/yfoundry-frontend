import React from "react";
import { ThemeProvider } from "styled-components";
import theme from './theme'

interface Props {
  children?: any;
}

// const theme = {
//   colors: {
//     black: "#040307",
//     orange: "#D8552A",
//     tan: "#D7B9A3",
//     white: "#FCFEFF"
//   },
// };

const ThemeComponent = ({ children }:Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeComponent;
