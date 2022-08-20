import useField from '../../../hooks/useField'
import Input from '../../Input/Input'
import ButtonModal from '../../ButtonModal/ButtonModal'

const EditForm = ({ handleToggle }) => {

    const amount = useField()
    const concept = useField()

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
            <Input id={'amount'} label={'amount'} type={'number'} placeholder={'Enter an amount'} value={amount.value} setValue={amount.onChange}/>
            <Input id={'concept'} label={'concept'} type={'text'} placeholder={'Enter a concept'} value={concept.value} setValue={concept.onChange}/>
            <ButtonModal name={'Update'}/>
        </div>
    </form>
  )
}

export default EditForm