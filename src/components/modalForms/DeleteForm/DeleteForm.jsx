import {useState, useEffect} from 'react'
import ButtonModal from '../../ButtonModal/ButtonModal'

const DeleteForm = ({ handleToggle, balanceId, setListenBalance }) => {
  
    const id = balanceId 
    let balanceDeleteURL = `https://bills-controller-api.herokuapp.com/api/balances/delete/${id}`
    
    const [confirm, setConfirm] = useState(false)

    const deleteBalance = async() => {
        fetch(balanceDeleteURL,{
        method: 'DELETE', 
        })
        .then(response => {
          console.log(response)
          setConfirm(false)
          setListenBalance(true)
        }) 
    }

    const handleDelete = (e) => {
        e.preventDefault();
        setConfirm(true)
    
    }

    useEffect(() => {
        if(confirm) {
            deleteBalance()
        }
    }, [confirm])



    return (
    <form 
    className='modal-form'
    onSubmit={handleDelete}
    >
        <div className='shadow'>
            <h2>Are you sure you want to delete?</h2> 

            <ButtonModal name={'Confirm'}/>

            <button className='modal-button'
            onClick={handleToggle}
            >
                Cancel
            </button>
        </div>
    </form>
  )
}

export default DeleteForm