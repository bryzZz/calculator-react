import './style.css';
import { ThemeContext } from 'components/ThemeContext';
import { useContext } from 'react';
import TrippleToggle from '../TrippleToggle/TrippleToggle';

export default function ThemeToggle() {
    const { theme, changeTheme } = useContext(ThemeContext);

    const handleChange = (value) => {
        changeTheme(value);
    };

    return (
        <div className='ThemeToggle'>
            <TrippleToggle
                label='THEME'
                checked={+theme}
                onChange={handleChange}
            />
        </div>
    );
}
