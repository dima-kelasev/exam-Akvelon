import React from "react";
import { useSelector } from "react-redux";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import "../App.css";
import { darkTheme, lightTheme, partyTheme } from "../themes";
import { ThemeSelector } from "./ThemeSelector";

export function App() {
  const theme = useSelector((state: any) => state.themeReducer.theme);
  return (
    <ThemeProvider theme={theme ?? {}}>
      <div className="App">
        {/* <GlobalStyle /> */}
        <header className="App-header">
          <ThemeSelector />
        </header>
      </div>
    </ThemeProvider>
  );
}
