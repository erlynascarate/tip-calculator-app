import '../sass/SelectTip.scss'

const percentages = [5, 10, 15, 25, 50]

const SelectTip = ({ render, customTipPercentage }) => {
    const focusMe = () => {
        const tipPercentages = document.querySelectorAll(
            '.select-tip-btn__input'
        )

        tipPercentages.forEach(percentage => {
            if (percentage.checked) {
                percentage.checked = false
            }
        })
    }

    return (
        <fieldset className='select-tip'>
            <legend className='select-tip__title'>Select Tip %</legend>
            {percentages.map(render)}
            <input
                className='select-tip__custom'
                type='number'
                placeholder='Custom'
                min={0.0}
                inputMode='decimal'
                ref={customTipPercentage}
                onFocus={focusMe}
            />
        </fieldset>
    )
}

export default SelectTip
