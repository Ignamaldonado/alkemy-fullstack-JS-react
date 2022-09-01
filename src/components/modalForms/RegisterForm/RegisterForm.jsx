import {useState, useEffect} from 'react'
import useField from '../../../hooks/useField'
import Input from '../../Input/Input'
import ButtonModal from '../../ButtonModal/ButtonModal'
import axios from 'axios'

const RegisterForm = ({ handleToggle, users, setRegisterSuccess, newUser, setNewUser}) => {

  const userPostURL = 'https://bills-controller-api.herokuapp.com/api/users/create'

  const newUserPost = async(object) => {
    fetch(userPostURL,{
    method: 'POST', 
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(object)
    })
    .then(response => console.log(response)) 
  }

  

  const [error, setError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [usedEmail, setUsedEmail] = useState(false)

    const name = useField()
    const email = useField()
    const password = useField()


    const handleRegister = (e) => {
        e.preventDefault();
        const nameRegExp = /^[a-zA-Z0-9]{8,16}$/
        const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/
        const emailRegExp = /\S+@\S+\.\S+/
        if([name.value, email.value, password.value].includes('')) {
          setError(true)
          return
        }
        setError(false)
        if(nameRegExp.test(name.value) === false) {
          setNameError(true)
          return
        }
        setNameError(false)
        if(emailRegExp.test(email.value) === false) {
          setEmailError(true)
          return
      }
      setEmailError(false)
      if(passwordRegExp.test(password.value) === false) {
          setPasswordError(true)
          return
      }
      setPasswordError(false)
      let emailExist = users.find(user => user.email.toLowerCase() == email.value.toLowerCase())
      if(emailExist) {
        setUsedEmail(true)
        return
      }
      setUsedEmail(false)

      setNewUser({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    }
    
    useEffect(() => {
      if(Object.keys(newUser).length > 0) {
        newUserPost(newUser)
        handleToggle()
        setRegisterSuccess(true)
      }
    }, [newUser])


  return (
    <form 
    className='modal-form'
    onSubmit={handleRegister}
    >
        <div className='shadow'>
            <h2>Register</h2>
            {error && <h3>All fields are needed</h3>}
            {usedEmail && <h3>Email already used</h3>}
            <Input id={'name'} label={'name'} type={'text'} placeholder={'Enter your name'} value={name.value} setValue={name.onChange}/>
            {nameError && <h3>Name must be between 8 and 16 characters long and no special character</h3>}
            <Input id={'email'} label={'email'} type={'email'} placeholder={'Enter your email'} value={email.value} setValue={email.onChange}/>
            {emailError && <h3>Email format is not valid</h3>}
            <Input id={'password'} label={'password'} type={'password'} placeholder={'Enter your password'} value={password.value} setValue={password.onChange}/>
            {passwordError && <h3>password has to be between 8 and 16 characters long, at least one number and one letter</h3>}
            <ButtonModal name={'register'}/>
        </div>
    </form>
  )
}

export default RegisterForm