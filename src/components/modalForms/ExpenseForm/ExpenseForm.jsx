import { useState, useEffect } from 'react'
import useField from '../../../hooks/useField'
import Input from '../../Input/Input'
import ButtonModal from '../../ButtonModal/ButtonModal'

const ExpenseForm = ({ handleToggle, user, guest, setListenBalance }) => {
  const typeId = 2
  let userId;
  let guestId = guest.id
  let loggedId = user.id

  if(loggedId) {
    userId = loggedId
  } else {
    userId = guestId
  }

  const [newBalance, setNewBalance] = useState({})

  const amount = useField()
  const concept = useField()
  const date = useField()

  const [error, setError] = useState(false)
  const [amountError, setAmountError] = useState(false)
  const [conceptError, setConceptError] = useState(false)
  
  const balancePostURL = 'https://bills-controller-api.herokuapp.com/api/balances/create'
  const newBalancePost = async(object) => {
    fetch(balancePostURL,{
    method: 'POST', 
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(object)
    })
    .then(response => {
      console.log(response)
      setNewBalance({})
      setListenBalance(true)
    }) 
  }

  const handleExpense = (e) => {
      e.preventDefault();
      const amountRegExp = /^[+]?\d+([.]\d+)?$/
      const conceptRegExp = /^[A-Za-z]+$/
      if([amount.value, concept.value, date.value].includes('')) {
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
      
      setNewBalance({
          amount: amount.value,
          concept: concept.value,
          date: date.value,
          type_id: typeId,
          user_id: userId
      })
  }

  useEffect(() => {
    if(Object.keys(newBalance).length > 0) {
      newBalancePost(newBalance)
      handleToggle()
    }
  }, [newBalance])

  return (
    <form 
    className='modal-form'
    onSubmit={handleExpense}
    >
        <div className='shadow'>
            <h2>Add expense</h2> 
            {error && <h3>All fields are needed</h3>} 
            <Input id={'amount'} label={'amount'} type={'number'} placeholder={'Enter an amount'} value={amount.value} setValue={amount.onChange}/>
            {amountError && <h3>The amount has to be a positive number</h3>}
            <Input id={'concept'} label={'concept'} type={'text'} placeholder={'Enter a concept'} value={concept.value} setValue={concept.onChange}/>
            {conceptError && <h3>The concept has to be a single word</h3>}
            <Input id={'date'} label={'date'} type={'date'} placeholder={'Enter a date'} value={date.value} setValue={date.onChange}/>
            <ButtonModal name={'Add'}/>
        </div>
    </form>
  )
}

export default ExpenseForm