const InfoBox = ({ title, tip }) => {
    return (
        <div className='info-box'>
            <span className='info-box__title'>{title}</span>
            <span className='info-box__text'>/ person</span>
            <span className='info-box__tip'>${tip}</span>
        </div>
    )
}

export default InfoBox
