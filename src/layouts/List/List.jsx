import ListDetail from "../../components/ListDetail/ListDetail"
import './list.css'
import Spinner from '../../components/Spinner/Spinner'

const List = ({ balances, setListenBalance, loader }) => {
  

  balances.map(balance => {
    if(balance.type_id == 1) {
      balance.type_id = 'income'
    } else if (balance.type_id == 2) {
      balance.type_id = 'expense'
    }
  })

  return (
    <div className='list-container '>
        <div className='shadow overflow'>
            {loader && <Spinner />}
            {balances.map(balance => <ListDetail key={balance.id} style={balance.type_id} name={balance.type_id} amount={balance.amount} concept={balance.concept} date={balance.date} id={balance.id} setListenBalance={setListenBalance}/> )}
            
        </div>
    </div>
  )
}

export default List