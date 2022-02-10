import './style.css';

export default function Keypad({ onClickControl }) {
    const handleClick = (event) => {
        if (!event.target.classList.contains('Keypad__item')) return;

        onClickControl(event.target.textContent);
    };

    return (
        <div className='Keypad' onClick={handleClick}>
            <button className='Keypad__item'>7</button>
            <button className='Keypad__item'>8</button>
            <button className='Keypad__item'>9</button>
            <button className='Keypad__item Keypad__item--del'>del</button>
            <button className='Keypad__item'>4</button>
            <button className='Keypad__item'>5</button>
            <button className='Keypad__item'>6</button>
            <button className='Keypad__item'>+</button>
            <button className='Keypad__item'>1</button>
            <button className='Keypad__item'>2</button>
            <button className='Keypad__item'>3</button>
            <button className='Keypad__item'>-</button>
            <button className='Keypad__item'>.</button>
            <button className='Keypad__item'>0</button>
            <button className='Keypad__item'>/</button>
            <button className='Keypad__item'>x</button>
            <button className='Keypad__item Keypad__item--reset'>reset</button>
            <button className='Keypad__item Keypad__item--equals'>=</button>
        </div>
    );
}
