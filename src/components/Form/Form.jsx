import './form.css'
import ButtonBalance from '../ButtonBalance/ButtonBalance'

const Form = () => {
  return (
    <div className='form-class'>
        <div className='form shadow'>
            Actual balance
            <div className='balance'>
                0
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