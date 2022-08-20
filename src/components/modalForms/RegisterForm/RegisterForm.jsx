import useField from '../../../hooks/useField'
import Input from '../../Input/Input'
import ButtonModal from '../../ButtonModal/ButtonModal'

const RegisterForm = ({ handleToggle }) => {

    const name = useField()
    const email = useField()
    const password = useField()


    const handleRegister = (e) => {
        e.preventDefault();
        console.log('anda el register')
        
    }

  return (
    <form 
    className='modal-form'
    onSubmit={handleRegister}
    >
        <div className='shadow'>
            <h2>Register</h2> 
            <Input id={'name'} label={'name'} type={'text'} placeholder={'Enter your name'} value={name.value} setValue={name.onChange}/>
            <Input id={'email'} label={'email'} type={'email'} placeholder={'Enter your email'} value={email.value} setValue={email.onChange}/>
            <Input id={'password'} label={'password'} type={'password'} placeholder={'Enter your password'} value={password.value} setValue={password.onChange}/>
            <ButtonModal name={'register'}/>
        </div>
    </form>
  )
}

export default RegisterForm