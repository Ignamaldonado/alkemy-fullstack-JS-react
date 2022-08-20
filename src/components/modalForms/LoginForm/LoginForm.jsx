import useField from '../../../hooks/useField'
import Input from '../../Input/Input'
import ButtonModal from '../../ButtonModal/ButtonModal'

const LoginForm = ({ handleToggle, setUser, users }) => {

    const email = useField()
    const password = useField()


    const handleLogin = (e) => {
        e.preventDefault();
        
        console.log(users)
    }

  return (
    <form 
    className='modal-form'
    onSubmit={handleLogin}
    >
        <div className='shadow'>
            <h2>Login</h2> 
            <Input id={'email'} label={'email'} type={'email'} placeholder={'Enter your email'} value={email.value} setValue={email.onChange}/>
            <Input id={'password'} label={'password'} type={'password'} placeholder={'Enter your password'} value={password.value} setValue={password.onChange}/>
            <ButtonModal name={'login'}/>
        </div>
    </form>
  )
}

export default LoginForm