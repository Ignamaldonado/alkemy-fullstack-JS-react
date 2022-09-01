import {useEffect, useState} from 'react'
import ButtonUser from "../../components/ButtonUser/ButtonUser"
import Form from "../../components/Form/Form"
import './header.css'

const Header = ({ user, setUser, users, guest, balance, setListenBalance, newUser, setNewUser}) => {

  const [registerSuccess, setRegisterSuccess] = useState(false)
  const [name, setName] = useState('guest')


  useEffect(() => {
    if(Object.keys(user).length > 0) {
      setName(user.name)
  }
  }, [user])

  return (
    <header>
        <div className='container-buttons'>
            <ButtonUser name={'Register'} register={true} setUser={setUser} users={users} setRegisterSuccess={setRegisterSuccess} newUser={newUser} setNewUser={setNewUser}/>
            <ButtonUser name={'Login'} register={false} setUser={setUser} users={users} setRegisterSuccess={setRegisterSuccess}/>
        </div>
        {registerSuccess && <h3>Your register was a success!!</h3> }
        {registerSuccess && <h3>You have to reload to enter your account!!</h3> }
        <h3>You are currently in the app as: <span>{name}</span></h3>
        <Form balance={balance} user={user} guest={guest} setListenBalance={setListenBalance}/>
    </header>
  )
}

export default Header