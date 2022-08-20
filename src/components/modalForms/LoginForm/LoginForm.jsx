import {useState} from 'react'
import useField from '../../../hooks/useField'
import Input from '../../Input/Input'
import ButtonModal from '../../ButtonModal/ButtonModal'

const LoginForm = ({ handleToggle, setUser, users }) => {

    const email = useField()
    const password = useField()

    const [error, setError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [emailNotFound, setEmailNotFound] = useState(false)
    const [passwordInvalid, setPasswordInvalid] = useState(false)


    const handleLogin = (e) => {
        e.preventDefault();
        const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const emailRegExp = /\S+@\S+\.\S+/
        if([ email.value, password.value ].includes('')) {
            setError(true)
            return
        }
        if(emailRegExp.test(email.value) === false) {
            setEmailError(true)
            return
        }
        if(passwordRegExp.test(password.value) === false) {
            setPasswordError(true)
            return
        }
        setError(false)
        setEmailError(false)
        setPasswordError(false)
        let findedUser = users.find(user => user.email == email.value) 
        if (!findedUser) {
            setEmailNotFound(true)
            return
        }
        setEmailNotFound(false)
        let successLogin = users.find(user => user.password == findedUser.password)
        if(!successLogin) {
            setPasswordInvalid(true)
            return
        }
        setPasswordInvalid(false)
        setUser = successLogin
        handleToggle()        
    }

  return (
    <form 
    className='modal-form'
    onSubmit={handleLogin}
    >
        <div className='shadow'>
            <h2>Login</h2> 
            {error && <h3>All fields are needed</h3>}
            {emailNotFound && <h3>Email not found</h3>}
            {passwordInvalid && <h3>Invalid Password</h3>}

            <Input id={'email'} label={'email'} type={'email'} placeholder={'Enter your email'} value={email.value} setValue={email.onChange}/>

            {emailError && <h3>Email format is not valid</h3>}

            <Input id={'password'} label={'password'} type={'password'} placeholder={'Enter your password'} value={password.value} setValue={password.onChange}/>

            {passwordError && <h3>password has to be minimum 8 characters long, 1 number and 1 letter</h3>}

            <ButtonModal name={'login'}/>
        </div>
    </form>
  )
}

export default LoginForm