import { useState } from 'react'
import useField from '../../../hooks/useField'
import Input from '../../Input/Input'
import ButtonModal from '../../ButtonModal/ButtonModal'

const EditForm = ({ handleToggle, setRegisterSuccess }) => {

    const amount = useField()
    const concept = useField()

    const [error, setError] = useState(false)
    const [amountError, setAmountError] = useState(false)
    const [conceptError, setConceptError] = useState(false)

    const handleEdit = (e) => {
        e.preventDefault();
        setRegisterSuccess(false)
        const amountRegExp = /^[+]?\d+([.]\d+)?$/
        const conceptRegExp = /^[A-Za-z]+$/
        if([amount.value, concept.value].includes('')) {
          setError(true)
          return
        }
        setError(false)
        if(amountRegExp.test(amount.value) === false) {
          setAmountError(true)
          return
        }
        setAmountError(false)
        if(conceptRegExp.test(concept.value) === false) {
          setConceptError(true)
          return
        }
        setConceptError(false)
        console.log('is validated')

    }

  return (
    <form 
    className='modal-form'
    onSubmit={handleEdit}
    >
        <div className='shadow'>
            <h2>Edit</h2> 
            {error && <h3>All fields are needed</h3>} 
            <Input id={'amount'} label={'amount'} type={'number'} placeholder={'Enter an amount'} value={amount.value} setValue={amount.onChange}/>
            {amountError && <h3>The amount has to be a positive number</h3>}
            <Input id={'concept'} label={'concept'} type={'text'} placeholder={'Enter a concept'} value={concept.value} setValue={concept.onChange}/>
            {conceptError && <h3>The concept has to be a single word</h3>}
            <ButtonModal name={'Add'}/>
        </div>
    </form>
  )
}

export default EditForm