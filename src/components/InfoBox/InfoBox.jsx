import styles from './InfoBox.module.scss'

const InfoBox = (props) => {
    const { title, tip } = props

    const formattedTip = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(tip)

    return (
        <div className={styles.infoBox}>
            <span className={styles.infoBox__title}>{title}</span>
            <span className={styles.infoBox__text}>/ person</span>
            <span className={styles.infoBox__tip}>{formattedTip}</span>
        </div>
    )
}

export default InfoBox
