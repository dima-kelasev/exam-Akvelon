import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { applyTheme } from '../redux/themeActions';
import { ITheme, darkTheme, lightTheme } from '../themes';

const StyledButton = styled.button`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.primary};
  box-shadow: none;
  border: 0px;
  border-radius: 4px;
  font-size: 1.2em;
  min-width: 120px;
  padding: 12px;
  margin: 12px;
`;

export const ThemeSelector = () => {
  const dispatch = useDispatch();
  const changeTheme = (theme: ITheme) => {
    dispatch(applyTheme(theme));
  };

  return (
    <div>
      <StyledButton onClick={() => changeTheme(lightTheme)}>Light</StyledButton>
      <StyledButton onClick={() => changeTheme(darkTheme)}>Dark</StyledButton>
    </div>
  );
};
