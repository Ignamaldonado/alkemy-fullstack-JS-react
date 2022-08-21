import ListDetail from "../../components/ListDetail/ListDetail"
import './list.css'

const List = ({ balances }) => {
  

  balances.map(balance => {
    if(balance.type_id == 1) {
      balance.type_id = 'income'
    } else if (balance.type_id == 2) {
      balance.type_id = 'expense'
    }
  })

  return (
    <div className='list-container '>
        <div className='shadow'>
            {balances.map(balance => <ListDetail key={balance.id} style={balance.type_id} name={balance.type_id} amount={balance.amount} concept={balance.concept}/> )}
            
        </div>
    </div>
  )
}

export default List