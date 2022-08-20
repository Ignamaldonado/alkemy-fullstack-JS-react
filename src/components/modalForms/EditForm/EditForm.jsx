import useInput from '../../../hooks/useInput'
import ButtonModal from '../../ButtonModal/ButtonModal'

const EditForm = ({ handleToggle }) => {

    //first ID, then label, then placeholder, then input type
    const [ amount, InputAmount ] = useInput('amount', 'Amount', 'Enter your amount', 'number')
    const [ concept, InputConcept] = useInput('concept', 'Concept', 'Enter a concept', 'text')

    const handleEdit = (e) => {
        e.preventDefault();
        console.log('anda el edit')
    }

  return (
    <form 
    className='modal-form'
    onSubmit={handleEdit}
    >
        <div className='shadow'>
            <h2>Edit</h2> 
            <InputAmount />
            <InputConcept />
            <ButtonModal name={'Update'}/>
        </div>
    </form>
  )
}

export default EditForm