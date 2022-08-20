import useInput from '../../../hooks/useInput'
import ButtonModal from '../../ButtonModal/ButtonModal'

const RegisterForm = ({ handleToggle }) => {

    //first ID, then label, then placeholder, then input type
    const [ name , InputName ] = useInput('name', 'Name', 'Enter your name', 'text') 
    const [ email, InputEmail ] = useInput('email', 'Email', 'Enter your email', 'email')
    const [password, InputPassword] = useInput('password', 'Password', 'Enter your password', 'password')

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('anda el register')
        console.log(name + ' ' + email + ' ' + password)
    }

  return (
    <form 
    className='modal-form'
    onSubmit={handleRegister}
    >
        <div className='shadow'>
            <h2>Register</h2> 
            <InputName />
            <InputEmail />
            <InputPassword />
            <ButtonModal name={'register'}/>
        </div>
    </form>
  )
}

export default RegisterForm