import { useState } from 'react';
import './style.css';

export default function Screen({ expression }) {
    const [isSelected, setIsSelected] = useState(false);

    // select on click
    const handleClick = (event) => {
        event.preventDefault();

        const range = document.createRange(),
            sel = window.getSelection();

        if (isSelected) {
            sel.removeAllRanges();
        } else {
            range.selectNodeContents(event.target);
            sel.removeAllRanges();
            sel.addRange(range);
        }

        setIsSelected((prev) => !prev);
    };

    return (
        <div className='Screen' onClick={handleClick}>
            {expression}
        </div>
    );
}
