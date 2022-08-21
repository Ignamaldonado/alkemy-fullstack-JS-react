import './buttonDetail.css'
import useActive from '../../hooks/useActive'
import Modal from '../Modal/Modal'

const ButtonDetail = ({ name, style, edit, id, setListenBalance }) => {

    let form;
    const {active, setToggle} = useActive()

    if(edit){
        form = 5 //form 5 is the edit
    } else {
        form = 6 //form 6 is the delete
    }

  return (
    <>
    <div 
    className={`detail-button ${style}`}
    onClick={setToggle}
    >
        {name}
    </div>

    {active && <Modal setToggle={setToggle} form={form} balanceId={id} setListenBalance={setListenBalance}/>}

    </>
  )
}

export default ButtonDetail