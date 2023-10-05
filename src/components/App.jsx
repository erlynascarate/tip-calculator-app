import { useForm } from 'react-hook-form'
import Header from './Header'
import Form from './Form'
import InstallationButton from './InstallationButton'
import FormContainer from './FormContainer'
import TextField from './TextField'
import SelectTip from './SelectTip'
import SelectTipButton from './SelectTipButton'
import Info from './Info'
import InfoBox from './InfoBox'

import Person from '../assets/icons/Person'
import Dollar from '../assets/icons/Dollar'

const initialResult = {
    tipAmount: 0.0,
    total: 0.0,
}

function App() {
    const { formState, register, watch, reset, resetField } = useForm({
        mode: 'onChange',
        defaultValues: {
            bill: '',
            people: '',
            customPercentage: '',
        },
    })

    const { errors } = formState

    let result = initialResult

    const customPercentageValue = watch('customPercentage')
    const billValue = watch('bill')
    const peopleValue = watch('people')

    const customPercentage = parseFloat(customPercentageValue)
    const percentageTip = parseFloat(watch('percentage'))

    const bill = parseFloat(billValue)
    const percentage = customPercentage || percentageTip
    const people = parseInt(peopleValue)

    const selectTipBtn = () => resetField('customPercentage')
    const selectCustomTip = () => resetField('percentage')

    const disabled =
        Boolean(bill) === false &&
        Boolean(percentage) === false &&
        Boolean(people) === false

    const isPosibleCalculating =
        Boolean(bill) && Boolean(percentage) && Boolean(people)

    if (isPosibleCalculating) {
        const tip = (bill * percentage) / 100

        const tipAmount = tip / people
        const total = (bill + tip) / people

        result = {
            tipAmount,
            total,
        }
    } else {
        result = initialResult
    }

    const handleReset = () => reset()

    return (
        <>
            <Header />
            <main>
                <Form onReset={handleReset}>
                    <InstallationButton />

                    <FormContainer>
                        <TextField
                            label='Bill'
                            inputMode='decimal'
                            Icon={<Dollar />}
                            min={0.0}
                            value={billValue}
                            register={register('bill', {
                                min: 0.0,
                            })}
                        />
                        <SelectTip
                            selectCustomTip={selectCustomTip}
                            value={customPercentageValue}
                            register={register('customPercentage')}
                            render={(percentage) => (
                                <SelectTipButton
                                    key={percentage}
                                    id={percentage}
                                    selectTipBtn={selectTipBtn}
                                    percentage={percentage}
                                    register={register('percentage')}
                                />
                            )}
                        />
                        <TextField
                            label='Number of People'
                            inputMode='numeric'
                            helperText={errors.people?.message}
                            Icon={<Person />}
                            min={1}
                            value={peopleValue}
                            register={register('people', {
                                validate: (value) => {
                                    const people = parseInt(value) || 0
                                    if (people === 0) {
                                        return "Can't be zero"
                                    } else if (value < 1) {
                                        return "Can't be less than one"
                                    } else {
                                        return true
                                    }
                                },
                            })}
                        />
                    </FormContainer>

                    <Info
                        disabled={disabled}
                        result={result}
                        render={(box) => <InfoBox key={box.title} {...box} />}
                    />
                </Form>
            </main>
        </>
    )
}

export default App
