import styles from './Info.module.scss'

const Info = (props) => {
    const { disabled, result, render } = props
    const { tipAmount, total } = result

    const infoBoxData = [
        { title: 'Tip Amount', tip: tipAmount },
        { title: 'Total', tip: total },
    ]

    return (
        <section className={styles.info}>
            {infoBoxData.map(render)}
            <input
                className={styles.info__reset}
                disabled={disabled}
                type='reset'
                value='Reset'
            />
        </section>
    )
}

export default Info
