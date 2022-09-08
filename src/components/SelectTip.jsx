import React from 'react';
import '../styles/SelectTip.sass';
import SelectTipButton from './SelectTipButton';

const percentages = [5, 10, 15, 25, 50];
const SelectTip = () => {
    return (
        <fieldset className="select-tip">
            <legend className="select-tip__title">Select Tip %</legend>
            {percentages.map((percentage) => (
                <SelectTipButton
                    key={percentage}
                    id={percentage}
                    percentage={percentage}
                />
            ))}
            <input
                className="select-tip__custom"
                type="number"
                placeholder="Custom"
            />
        </fieldset>
    );
};

export default SelectTip;
