import { useState } from 'react';
import { ThemeContext, possibleThemeIndexes } from '@/ThemeContext';
import Calculator from '../Calculator/Calculator';
import './style.css';

export default function App() {
    const [themeIndex, setThemeIndex] = useState(0);

    const changeTheme = (themeIndex) => {
        if (possibleThemeIndexes.includes(themeIndex)) {
            setThemeIndex(themeIndex);
        }
    };

    return (
        <ThemeContext.Provider value={{ themeIndex, changeTheme }}>
            <div className={`App theme-${themeIndex}`}>
                <Calculator />
            </div>
        </ThemeContext.Provider>
    );
}
