import {useEffect, useState} from 'react'
import ButtonUser from "../../components/ButtonUser/ButtonUser"
import Form from "../../components/Form/Form"
import './header.css'

const Header = ({ user, setUser, users, guest, balance }) => {

  const [name, setName] = useState('guest')


  useEffect(() => {
    if(Object.keys(user).length > 0) {
      setName(user.name)
  }
  }, [user])

  return (
    <header>
        <div className='container-buttons'>
            <ButtonUser name={'Register'} register={true} setUser={setUser} users={users} />
            <ButtonUser name={'Login'} register={false} setUser={setUser} users={users}/>
        </div>
        <h3>You are currently in the app as: <span>{name}</span></h3>
        <Form balance={balance}/>
    </header>
  )
}

export default Header