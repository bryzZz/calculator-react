import { ThemeContextComponent } from 'components/ThemeContext';
import Calculator from '../Calculator/Calculator';
import './style.css';

export default function App() {
    return (
        <ThemeContextComponent>
            <div className='App'>
                <Calculator />
            </div>
        </ThemeContextComponent>
    );
}
