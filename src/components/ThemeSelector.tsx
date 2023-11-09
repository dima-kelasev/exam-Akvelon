import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { darkTheme, lightTheme } from '../themes';
import { applyTheme } from '../redux/action/theme';
import { ITheme } from '../redux/reducers/theme/type';

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
