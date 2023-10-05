import styles from './SelectTip.module.scss'

const percentages = [5, 10, 15, 25, 50]

const SelectTip = (props) => {
    const { selectCustomTip, value, register, render } = props

    return (
        <fieldset className={styles.selectTip}>
            <legend className={styles.selectTip__title}>Select Tip %</legend>
            {percentages.map(render)}
            <input
                onInput={selectCustomTip}
                className={styles.selectTip__custom}
                type='number'
                placeholder='Custom'
                min={0.0}
                inputMode='decimal'
                value={value}
                {...register}
            />
        </fieldset>
    )
}

export default SelectTip
