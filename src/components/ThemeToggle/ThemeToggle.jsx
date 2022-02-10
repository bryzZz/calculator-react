import './style.css';
import { ThemeContext } from '@/ThemeContext';
import { useContext } from 'react';
import TrippleToggle from '../TrippleToggle/TrippleToggle';

export default function ThemeToggle() {
    const { themeIndex, changeTheme } = useContext(ThemeContext);

    const handleChange = (value) => {
        changeTheme(value);
    };

    return (
        <div className='ThemeToggle'>
            <TrippleToggle
                label='THEME'
                checked={themeIndex}
                onChange={handleChange}
            />
        </div>
    );
}
