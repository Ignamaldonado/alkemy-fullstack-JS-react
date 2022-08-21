import './form.css'
import ButtonBalance from '../ButtonBalance/ButtonBalance'

const Form = ({ balance }) => {
  return (
    <div className='form-class'>
        <div className='form shadow'>
            Actual balance
            <div className='balance'>
                {balance}
            </div>
            <div className='buttons-container'>
                <ButtonBalance name={'Income'} income={true}/>
                <ButtonBalance name={'Expense'} income={false}/>
            </div>
        </div>
    </div>
  )
}

export default Form