import { createContext } from 'react';
import { useTheme } from '@/hooks/useTheme';

const initialState = {
    themeIndex: 0,
    changeTheme: () => null,
};

const possibleThemeIndexes = [0, 1, 2];
const ThemeContext = createContext(initialState);

const ThemeContextComponent = (props) => {
    const { theme, setTheme } = useTheme(initialState.themeIndex);

    const changeTheme = (themeIndex) => {
        if (possibleThemeIndexes.includes(themeIndex)) {
            setTheme(themeIndex);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export { possibleThemeIndexes, ThemeContext, ThemeContextComponent };
