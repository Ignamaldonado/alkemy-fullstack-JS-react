import './ListDetail.css';
import ButtonDetail from '../ButtonDetail/ButtonDetail'

const ListDetail = ({ name, style, amount, concept }) => {
  return (
    <div  className='detail-container'>
      <div className={`type-text ${style}`}>
        {name}
      </div>
      <div className='detail-text'>
        <h4>Amount: <span>{amount}</span></h4>
        <h4>Concept: <span>{concept}</span></h4>
      </div>
      <div className='detail-buttons'>
          <ButtonDetail name={'Edit'} style={'edit'} edit={true}/>
          <ButtonDetail name={'Delete'} style={'delete'} edit={false}/>
      </div>      
    </div>
  )
}

export default ListDetail