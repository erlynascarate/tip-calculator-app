import '../sass/Info.scss'

const Info = ({ children }) => {
    return (
        <section className='info'>
            {children}
            <input className='info__reset' type='reset' value='Reset' />
        </section>
    )
}

export default Info
