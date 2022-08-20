import useField from '../../../hooks/useField'
import Input from '../../Input/Input'
import ButtonModal from '../../ButtonModal/ButtonModal'

const IncomeForm = ({ handleToggle }) => {

    //first ID, then label, then placeholder, then input type
    const amount = useField()
    const concept = useField()
    const date = useField()
    

    const handleIncome = (e) => {
        e.preventDefault();
        console.log('anda el Income')
    }

  return (
    <form 
    className='modal-form'
    onSubmit={handleIncome}
    >
        <div className='shadow'>
            <h2>Add income</h2> 
            <Input id={'amount'} label={'amount'} type={'number'} placeholder={'Enter an amount'} value={amount.value} setValue={amount.onChange}/>
            <Input id={'concept'} label={'concept'} type={'text'} placeholder={'Enter a concept'} value={concept.value} setValue={concept.onChange}/>
            <Input id={'date'} label={'date'} type={'date'} placeholder={'Enter a date'} value={date.value} setValue={date.onChange}/>
            <ButtonModal name={'Add'}/>
        </div>
    </form>
  )
}

export default IncomeForm