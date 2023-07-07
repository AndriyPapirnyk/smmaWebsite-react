import './ServiceCard.css';
import arrowImg from './img/arrow.png'

function ServiceCard(props) {

//   const { cardWidth } = props.width;
  

  return (
    <div className="serviceCard" style={{width: `${props.width}`}}>
        <h1 className='serviceCard__heading'>{props.heading}</h1>
        <div className="serviceCard__icon">
            <img src={props.icon} alt="" />
        </div>
        {/* <div className="serviceCard__main">
            <h1>{props.heading}</h1>
            <p>{props.desciption}</p>
        </div> */}
        <div className='serviceCard__button'>
            <img src={arrowImg} alt="" />
        </div>
    </div>
  );
}

export default ServiceCard;
