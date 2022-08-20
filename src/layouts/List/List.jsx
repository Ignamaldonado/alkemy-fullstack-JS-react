import ListDetail from "../../components/ListDetail/ListDetail"
import './list.css'

const List = () => {
  return (
    <div className='list-container '>
        <div className='shadow'>
            <ListDetail name={'income'} style={'income'}/>
            <ListDetail name={'expense'} style={'expense'}/>
            <ListDetail name={'income'} style={'income'}/>
        </div>
    </div>
  )
}

export default List