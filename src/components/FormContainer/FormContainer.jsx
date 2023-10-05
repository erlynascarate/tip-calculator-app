import styles from './FormContainer.module.scss'

const FormContainer = (props) => {
    const { children } = props

    return <section className={styles.formContainer}>{children}</section>
}

export default FormContainer
