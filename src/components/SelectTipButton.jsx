import '../sass/SelectTipButton.scss'

const SelectTipButton = ({ customTipPercentage, id, percentage }) => {
    const focusMe = () => {
        customTipPercentage.current.value = ''
    }

    return (
        <span className='select-tip-btn'>
            <input
                id={id}
                className='select-tip-btn__input'
                type='radio'
                name='tip'
                value={percentage}
                onChange={focusMe}
            />
            <label className='select-tip-btn__container' htmlFor={id}>
                {percentage}%
            </label>
        </span>
    )
}

export default SelectTipButton
