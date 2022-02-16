import { useLayoutEffect, useState } from 'react';

export const useTheme = ({ initialTheme }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('app-theme') || initialTheme || 0
    );

    useLayoutEffect(() => {
        localStorage.setItem('app-theme', theme);
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return { theme, setTheme };
};
