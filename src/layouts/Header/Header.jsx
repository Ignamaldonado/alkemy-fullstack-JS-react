import ButtonUser from "../../components/ButtonUser/ButtonUser"
import Form from "../../components/Form/Form"
import './header.css'

const Header = () => {
  return (
    <header>
        <div className='container-buttons'>
            <ButtonUser name={'Register'} register={true}/>
            <ButtonUser name={'Login'} register={false}/>
        </div>
        <h3>You are currently in the app as: <span>guest</span></h3>
        <Form />
    </header>
  )
}

export default Header