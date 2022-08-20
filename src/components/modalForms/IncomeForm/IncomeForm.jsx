import useInput from '../../../hooks/useInput'
import ButtonModal from '../../ButtonModal/ButtonModal'

const IncomeForm = ({ handleToggle }) => {

    //first ID, then label, then placeholder, then input type
    const [ amount, InputAmount ] = useInput('amount', 'Amount', 'Enter your amount', 'number')
    const [concept, InputConcept] = useInput('concept', 'Concept', 'Enter a concept', 'text')
    const [date, InputDate] = useInput('date', 'Date', 'Enter a date', 'date')

    const handleIncome = (e) => {
        e.preventDefault();
        console.log('anda el Income')
        console.log(date)
    }

  return (
    <form 
    className='modal-form'
    onSubmit={handleIncome}
    >
        <div className='shadow'>
            <h2>Add income</h2> 
            <InputAmount />
            <InputConcept />
            <InputDate />
            <ButtonModal name={'Add'}/>
        </div>
    </form>
  )
}

export default IncomeForm