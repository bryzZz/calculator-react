import { useState } from 'react';

const operators = ['+', '-', '/', 'x', '.'];

export const useCalculator = () => {
    const [expression, setExpression] = useState('0');

    const calculate = () => {
        return setExpression((prev) =>
            eval(prev.replaceAll('x', '*')).toString()
        );
    };

    const addOption = (option) => {
        if (!isNaN(option)) {
            setExpression((prev) => (prev === '0' ? option : prev + option));
        } else if (
            operators.includes(option) &&
            !operators.includes(expression[expression.length - 1])
        ) {
            setExpression((prev) => (prev !== '0' ? prev + option : prev));
        } else if (option === 'reset') {
            setExpression('0');
        } else if (option === 'del') {
            setExpression((prev) =>
                prev.length === 1 ? '0' : prev.slice(0, -1)
            );
        }
    };

    return { expression, addOption, calculate };
};
