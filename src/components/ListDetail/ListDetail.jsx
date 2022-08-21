import './ListDetail.css';
import ButtonDetail from '../ButtonDetail/ButtonDetail'

const ListDetail = ({ name, style, amount, concept, date, id, setListenBalance }) => {
  
  return (
    <div  className='detail-container'>
      <div className={`type-text ${style}`}>
        {name}
      </div>
      <div className='detail-text'>
        <h4>Amount: <span>{amount}</span></h4>
        <h4>Concept: <span>{concept}</span></h4>
        <h4 className="date-detail">Date: <span>{date}</span></h4>
      </div>
      <div className='detail-buttons'>
          <ButtonDetail name={'Edit'} style={'edit'} edit={true} id={id} setListenBalance={setListenBalance}/>
          <ButtonDetail name={'Delete'} style={'delete'} edit={false} id={id} setListenBalance={setListenBalance}/>
      </div>      
    </div>
  )
}

export default ListDetail