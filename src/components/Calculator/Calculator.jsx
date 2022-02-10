import './style.css';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';
import Screen from 'components/Screen/Screen';
import Keypad from 'components/Keypad/Keypad';
import { useCalculator } from '@/hooks/useCalculator';

export default function Calculator() {
    const { expression, addOption, calculate } = useCalculator();

    const handleClickControl = (option) => {
        if (option === '=') {
            calculate();
        } else {
            addOption(option);
        }
    };

    return (
        <div className='Calculator'>
            <div className='Calculator__container'>
                <div className='Calculator__top'>
                    <h1 className='Calculator__title'>calc</h1>
                    <ThemeToggle />
                </div>
                <Screen expression={expression} />
                <Keypad onClickControl={handleClickControl} />
            </div>
        </div>
    );
}
