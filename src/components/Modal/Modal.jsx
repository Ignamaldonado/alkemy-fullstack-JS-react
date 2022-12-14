import './modal.css'
import closeButton from '../../assets/closeButton.svg'
import RegisterForm from '../modalForms/RegisterForm/RegisterForm'
import LoginForm from '../modalForms/LoginForm/LoginForm'
import IncomeForm from '../modalForms/IncomeForm/IncomeForm'
import ExpenseForm from '../modalForms/ExpenseForm/ExpenseForm'
import EditForm from '../modalForms/EditForm/EditForm'
import DeleteForm from '../modalForms/DeleteForm/DeleteForm'

const Modal = ({ setToggle, form, setUser, users, setRegisterSuccess, user, guest, setListenBalance, balanceId, newUser, setNewUser}) => {

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
            <RegisterForm  handleToggle={handleToggle} users={users} setRegisterSuccess={setRegisterSuccess} newUser={newUser} setNewUser={setNewUser}/>
        </>
        }

        {form == 2 && 
        <>
            <LoginForm handleToggle={handleToggle} setUser={setUser} users={users} setRegisterSuccess={setRegisterSuccess}/>
        </>
        }

        {form == 3 && 
        <>
            <IncomeForm handleToggle={handleToggle} user={user} guest={guest} setListenBalance={setListenBalance}/>
        </>
        }

        {form == 4 && 
        <>
            <ExpenseForm handleToggle={handleToggle} user={user} guest={guest} setListenBalance={setListenBalance}/>
        </>
        } 

        {form == 5 && 
        <>
            <EditForm handleToggle={handleToggle} balanceId={balanceId} setListenBalance={setListenBalance}/>
        </>
        } 

        {form == 6 && 
        <>
            <DeleteForm handleToggle={handleToggle} balanceId={balanceId} setListenBalance={setListenBalance}/>
        </>
        }   
    </div>
  )
}

export default Modal