import '../sass/SelectTipButton.scss'

const SelectTipButton = ({ id, percentage }) => {
    return (
        <span className='select-tip-btn'>
            <input
                id={id}
                className='select-tip-btn__input'
                type='radio'
                name='tip'
            />
            <label className='select-tip-btn__container' htmlFor={id}>
                {percentage}%
            </label>
        </span>
    )
}

export default SelectTipButton
