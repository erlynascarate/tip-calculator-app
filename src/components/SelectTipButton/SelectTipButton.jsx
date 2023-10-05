import styles from './SelectTipButton.module.scss'

const SelectTipButton = (props) => {
    const { selectTipBtn, id, percentage, register } = props

    return (
        <span className={styles.selectTipBtn}>
            <input
                onInput={selectTipBtn}
                id={id}
                className={styles.selectTipBtn__input}
                type='radio'
                value={percentage}
                {...register}
            />
            <label className={styles.selectTipBtn__container} htmlFor={id}>
                {percentage}%
            </label>
        </span>
    )
}

export default SelectTipButton
