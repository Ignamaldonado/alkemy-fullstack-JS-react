import ButtonModal from '../../ButtonModal/ButtonModal'

const DeleteForm = ({ handleToggle }) => {
  
    const handleDelete = (e) => {
        e.preventDefault();
        console.log('confirmaste un borrado')
    }

    return (
    <form 
    className='modal-form'
    onSubmit={handleDelete}
    >
        <div className='shadow'>
            <h2>Estas seguro que deseas borrar?</h2> 

            <ButtonModal name={'Confirmar'}/>

            <button className='modal-button'
            onClick={handleToggle}
            >
                Cancelar
            </button>
        </div>
    </form>
  )
}

export default DeleteForm