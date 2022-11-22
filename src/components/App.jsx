import { useRef, useState } from 'react'
import '../sass/App.scss'
import Header from './Header'
import Bill from '../components/Bill'
import Info from '../components/Info'
import NumberOfPeople from '../components/NumberOfPeople'
import SelectTip from '../components/SelectTip'
import SelectTipButton from '../components/SelectTipButton'
import InfoBox from '../components/InfoBox'

const initialResult = {
    tipAmount: 0.0,
    total: 0.0,
}

function App() {
    const [result, setResult] = useState(initialResult)

    const bill = useRef()
    const customTipPercentage = useRef()
    const people = useRef()

    const calculate = () => {
        const valueBill = parseFloat(bill.current.value)

        const tipPercentages = document.querySelectorAll(
            '.select-tip-btn__input'
        )

        const tipPercentage = [...tipPercentages].find(
            percentage => percentage.checked === true
        )

        let valueTipPercentage
        const valueCustomTipPercentage = parseFloat(
            customTipPercentage.current.value
        )
        if (valueCustomTipPercentage) {
            valueTipPercentage = valueCustomTipPercentage
        } else {
            valueTipPercentage = parseFloat(tipPercentage?.value) || 0
        }
        const valuePeople = parseInt(people.current.value)

        if (valueBill && valueTipPercentage && valuePeople) {
            const tip = (valueBill * valueTipPercentage) / 100
            const tipAmount = tip / valuePeople
            const total = (valueBill + tip) / valuePeople

            setResult({
                tipAmount,
                total,
            })
        } else {
            setResult(initialResult)
        }
    }

    const reset = () => {
        bill.current.value = ''
        const tipPercentages = document.querySelectorAll(
            '.select-tip-btn__input'
        )

        tipPercentages.forEach(percentage => {
            if (percentage.checked) {
                percentage.checked = false
            }
        })
        people.current.value = ''

        setResult(initialResult)
    }

    return (
        <>
            <Header />
            <main>
                <form
                    className='form'
                    onSubmit={event => event.defaultPrevented()}
                    onReset={reset}
                >
                    <section className='form-container' onChange={calculate}>
                        <Bill bill={bill} />
                        <SelectTip
                            customTipPercentage={customTipPercentage}
                            render={percentage => (
                                <SelectTipButton
                                    key={percentage}
                                    id={percentage}
                                    percentage={percentage}
                                    customTipPercentage={customTipPercentage}
                                />
                            )}
                        />
                        <NumberOfPeople people={people} />
                    </section>
                    <Info
                        result={result}
                        render={box => <InfoBox key={box.title} {...box} />}
                    />
                </form>
            </main>
        </>
    )
}

export default App
