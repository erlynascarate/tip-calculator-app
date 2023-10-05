import styles from './Form.module.scss'

const Form = (props) => {
    const { onReset, children } = props

    return (
        <form onReset={onReset} className={styles.form}>
            {children}
        </form>
    )
}

export default Form
