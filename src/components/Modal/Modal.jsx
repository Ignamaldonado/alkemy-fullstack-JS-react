import './modal.css'
import closeButton from '../../assets/closeButton.svg'
import useInput from '../../hooks/useInput'
import ButtonModal from '../ButtonModal/ButtonModal'
import RegisterForm from '../modalForms/RegisterForm/RegisterForm'
import LoginForm from '../modalForms/LoginForm/LoginForm'
import IncomeForm from '../modalForms/IncomeForm/IncomeForm'
import ExpenseForm from '../modalForms/ExpenseForm/ExpenseForm'
import EditForm from '../modalForms/EditForm/EditForm'
import DeleteForm from '../modalForms/DeleteForm/DeleteForm'

const Modal = ({ setToggle, form }) => {

    const handleToggle = () => {
        setToggle();
    }

  return (
    <div className='modal'>
        <div className='close-modal'>
            <img 
                src={closeButton}
                alt='close button'
                onClick={handleToggle}
            />
        </div>

        {form == 1 && 
        <>
            <RegisterForm  handleToggle={handleToggle}/>
        </>
        }

        {form == 2 && 
        <>
            <LoginForm handleToggle={handleToggle}/>
        </>
        }

        {form == 3 && 
        <>
            <IncomeForm handleToggle={handleToggle}/>
        </>
        }

        {form == 4 && 
        <>
            <ExpenseForm handleToggle={handleToggle}/>
        </>
        } 

        {form == 5 && 
        <>
            <EditForm handleToggle={handleToggle}/>
        </>
        } 

        {form == 6 && 
        <>
            <DeleteForm handleToggle={handleToggle}/>
        </>
        }   
    </div>
  )
}

export default Modal