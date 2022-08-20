import './buttonUser.css'
import useActive from '../../hooks/useActive'
import Modal from '../Modal/Modal'

const ButtonUser = ({ name, register }) => {

    let form;
    const {active, setToggle} = useActive()
    
    if(register) {
      form = 1 // form 1 is register  
    } else {
      form = 2 //form 2 is login
    }

  return (
    <>
    <div 
    className='button-user'
    onClick={setToggle}
    >
        {name}
    </div>

   {active && <Modal setToggle={setToggle} form={form}/>}
    
    </>
  )
}

export default ButtonUser