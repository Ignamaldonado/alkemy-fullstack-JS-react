import './buttonBalance.css'
import useActive from '../../hooks/useActive';
import Modal from '../Modal/Modal'

const ButtonBalance = ({ name, income }) => {

  let form;
  const {active, setToggle} = useActive()

  if(income) {
    form = 3 //form 3 is the income
  } else {
    form = 4 //form 4 is the expense
  }

  return (
    <>
    <div 
    className='button-balance'
    onClick={setToggle}
    >
        {name}
    </div>
    
    {active && <Modal setToggle={setToggle} form={form}/>}
    
    </>
  )
}

export default ButtonBalance