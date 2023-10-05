import { useId } from 'react'
import styles from './TextField.module.scss'

const TextField = (props) => {
    const { helperText, label, min, inputMode, register, Icon, value } = props

    const id = useId()

    return (
        <fieldset className={styles.fieldset}>
            <legend className={styles.fieldsetLegend}>
                <label className={styles.fieldset__title} htmlFor={id}>
                    {label}
                </label>
                <span className={styles.fieldset__warning}>{helperText}</span>
            </legend>
            <div className={styles.fieldsetInput}>
                <label className={styles.fieldsetInput__icon} htmlFor={id}>
                    {Icon}
                </label>
                <input
                    id={id}
                    className={styles.fieldsetInput__input}
                    type='number'
                    placeholder='0'
                    inputMode={inputMode}
                    min={min}
                    value={value}
                    {...register}
                />
            </div>
        </fieldset>
    )
}

export default TextField
