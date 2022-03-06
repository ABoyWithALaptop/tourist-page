import React from 'react';
import { Link } from 'react-router-dom';

interface cardProps {
  src?: string;
  text?: string;
  label?: string;
  path: string;
}

const CardItem: React.FC<cardProps> = function (props: cardProps) {
  
  return (
    <React.Fragment>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path} >
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Travel Img"
              className='cards__item__img' />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text"> {props.text} </h5>
          </div>
        </Link>
      </li>
    </React.Fragment>
  )
}

export default CardItem