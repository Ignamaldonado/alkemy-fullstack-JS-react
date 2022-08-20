import './buttonModal.css'

const ButtonModal = ({ name }) => {
  return (
    <button className='modal-button'
    type='submit'
    >
        {name}
    </button>
  )
}

export default ButtonModal