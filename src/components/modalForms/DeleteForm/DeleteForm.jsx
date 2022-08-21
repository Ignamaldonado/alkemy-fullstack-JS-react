import ButtonModal from '../../ButtonModal/ButtonModal'

const DeleteForm = ({ handleToggle, setRegisterSuccess }) => {
  
    const handleDelete = (e) => {
        e.preventDefault();
        setRegisterSuccess(false)
        console.log('confirmaste un borrado')
    }

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