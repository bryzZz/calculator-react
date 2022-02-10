import { createContext } from 'react';

const initialState = {
    themeIndex: 0,
    changeTheme: () => null,
};

const possibleThemeIndexes = [0, 1, 2];
const ThemeContext = createContext(initialState);

export { possibleThemeIndexes, ThemeContext };
