import ButtonUser from "../../components/ButtonUser/ButtonUser"
import Form from "../../components/Form/Form"
import './header.css'

const Header = ({ user, setUser, users, guest }) => {

  let name;

  if(Object.keys(user).length == 0) {
      name = guest.name
  } else {
    name = user.name
  }

  return (
    <header>
        <div className='container-buttons'>
            <ButtonUser name={'Register'} register={true} setUser={setUser} users={users} />
            <ButtonUser name={'Login'} register={false} setUser={setUser} users={users}/>
        </div>
        <h3>You are currently in the app as: <span>{name}</span></h3>
        <Form />
    </header>
  )
}

export default Header