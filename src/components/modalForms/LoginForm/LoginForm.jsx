import useInput from '../../../hooks/useInput'
import ButtonModal from '../../ButtonModal/ButtonModal'

const LoginForm = ({ handleToggle }) => {

    //first ID, then label, then placeholder, then input type
    const [ email, InputEmail ] = useInput('email', 'Email', 'Enter your email', 'email')
    const [password, InputPassword] = useInput('password', 'Password', 'Enter your password', 'password')

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('anda el Login')
        console.log(email + ' ' + password)
    }

  return (
    <form 
    className='modal-form'
    onSubmit={handleLogin}
    >
        <div className='shadow'>
            <h2>Login</h2> 
            <InputEmail />
            <InputPassword />
            <ButtonModal name={'login'}/>
        </div>
    </form>
  )
}

export default LoginForm