import '../sass/Info.scss'

const Info = ({ result: { tipAmount, total }, render }) => {
    const infoBoxData = [
        { title: 'Tip Amount', tip: tipAmount },
        { title: 'Total', tip: total },
    ]

    return (
        <section className='info'>
            {infoBoxData.map(render)}
            <input className='info__reset' type='reset' value='Reset' />
        </section>
    )
}

export default Info
