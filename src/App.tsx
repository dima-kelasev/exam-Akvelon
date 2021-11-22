import React from "react";
import { MainPage } from "./pages/Main";

import { useSelector } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BodyStyled } from "./styles";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props: any) => props.theme.backgroundColor};
  }
`;

export const App = (): JSX.Element => {
  const theme = useSelector((state: any) => state.themeReducer.theme);
  return (
    <ThemeProvider theme={theme}>
      <BodyStyled className="body">
        <GlobalStyle />
        <MainPage />
      </BodyStyled>
    </ThemeProvider>
  );
};
