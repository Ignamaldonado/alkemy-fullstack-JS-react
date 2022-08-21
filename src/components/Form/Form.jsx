import './form.css'
import ButtonBalance from '../ButtonBalance/ButtonBalance'

const Form = ({ balance, user, guest, setListenBalance }) => {
  return (
    <div className='form-class'>
        <div className='form shadow'>
            Actual balance
            <div className='balance'>
                {balance}
            </div>
            Add income/expense
            <div className='buttons-container'>
                <ButtonBalance name={'Income'} income={true} user={user} guest={guest} setListenBalance={setListenBalance}/>
                <ButtonBalance name={'Expense'} income={false} user={user} guest={guest} setListenBalance={setListenBalance}/>
            </div>
        </div>
    </div>
  )
}

export default Form