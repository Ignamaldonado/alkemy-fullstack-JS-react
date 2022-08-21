import { useState, useEffect } from 'react'
import useField from '../../../hooks/useField'
import Input from '../../Input/Input'
import ButtonModal from '../../ButtonModal/ButtonModal'

const EditForm = ({ handleToggle, balanceId, setListenBalance }) => {
    let id = balanceId
    let balancePutURL = `http://localhost:3001/api/balances/update/${id}`

    const amount = useField()
    const concept = useField()
    
    const [error, setError] = useState(false)
    const [amountError, setAmountError] = useState(false)
    const [conceptError, setConceptError] = useState(false)
    const [updatedBalance, setUpdatedBalance] = useState({})

    const editBalancePut = async(object) => {
      fetch(balancePutURL,{
      method: 'PUT', 
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(object)
      })
      .then(response => {
        console.log(response)
        setUpdatedBalance({})
        setListenBalance(true)
      }) 
    }

    const handleEdit = (e) => {
        e.preventDefault();
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
        
        setUpdatedBalance({
          amount: amount.value,
          concept: concept.value
        })
    }

    useEffect(() => {
      if(Object.keys(updatedBalance).length > 0) {
        editBalancePut(updatedBalance)
        handleToggle()
      }
    }, [updatedBalance])

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
            <ButtonModal name={'Edit'}/>
        </div>
    </form>
  )
}

export default EditForm