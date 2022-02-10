import './style.css';

export default function TrippleToggle({ label, checked, onChange }) {
    const inputs = [],
        labels = [],
        sliderLabels = [];

    for (let i = 0; i < 3; i++) {
        inputs.push(
            <input
                key={i}
                className={'radio' + (i + 1)}
                id={'toggle3radio' + (i + 1)}
                type='radio'
                name='toggle3'
                value={i}
                defaultChecked={i === checked}
            />
        );
        labels.push(
            <label
                key={i}
                className='labelTop'
                htmlFor={'toggle3radio' + (i + 1)}
            >
                {i + 1}
            </label>
        );
        sliderLabels.push(
            <label
                key={i}
                className={'label' + (i + 1)}
                htmlFor={'toggle3radio' + (i + 1)}
            ></label>
        );
    }

    return (
        <div
            className='TrippleToggle'
            onChange={(e) => onChange(Number(e.target.value))}
        >
            {inputs}
            <div className='topLabelContainer'>{labels}</div>
            <span className='labelLeft'>{label}</span>
            <span className='sliderContainer'>
                {sliderLabels}
                <span className='slider'></span>
            </span>
        </div>
    );
}
