import { useEffect, useState } from 'react'
import '../sass/InstallationButton.scss'

const InstallationButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null)

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', event => {
            event.preventDefault()
            setDeferredPrompt(event)
        })
    }, [])

    const install = async () => {
        deferredPrompt.prompt()

        const { outcome } = await deferredPrompt.userChoice

        if (outcome === 'accepted') return setDeferredPrompt(null)
    }

    return (
        <>
            {deferredPrompt && (
                <button
                    onClick={install}
                    className='installation-button'
                    type='button'
                >
                    Install App
                </button>
            )}
        </>
    )
}

export default InstallationButton
