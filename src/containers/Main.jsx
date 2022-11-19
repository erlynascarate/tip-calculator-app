import { useRef, useState } from 'react'
import '../sass/Main.scss'
import Bill from '../components/Bill'
import Info from '../components/Info'
import NumberOfPeople from '../components/NumberOfPeople'
import SelectTip from '../components/SelectTip'
import SelectTipButton from '../components/SelectTipButton'
import InfoBox from '../components/InfoBox'

const percentages = [5, 10, 15, 25, 50]

const Main = () => {
    const [result, setResult] = useState({
        tipAmount: 0.0,
        total: 0.0,
    })

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
            setResult({
                tipAmount: 0.0,
                total: 0.0,
            })
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

        setResult({
            tipAmount: 0.0,
            total: 0.0,
        })
    }

    const infoBoxData = [
        { title: 'Tip Amount', tip: result.tipAmount },
        { title: 'Total', tip: result.total },
    ]

    return (
        <main>
            <form
                className='form'
                onSubmit={event => event.defaultPrevented()}
                onReset={reset}
            >
                <section className='form-container' onChange={calculate}>
                    <Bill bill={bill} />
                    <SelectTip customTipPercentage={customTipPercentage}>
                        {percentages.map(percentage => (
                            <SelectTipButton
                                key={percentage}
                                id={percentage}
                                percentage={percentage}
                                customTipPercentage={customTipPercentage}
                            />
                        ))}
                    </SelectTip>
                    <NumberOfPeople people={people} />
                </section>
                <Info>
                    {infoBoxData.map(box => (
                        <InfoBox key={box.title} {...box} />
                    ))}
                </Info>
            </form>
        </main>
    )
}

export default Main
