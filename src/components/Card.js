import React from 'react';
import '../index.css';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  // Возвращаем JSX-разметку компонента Card
  return (
    <li className="cards-list__item">
      <img className="cards-list__image" src={props.cardLink} alt={props.cardName} onClick={handleClick} />
      <button className="cards-list__delete-icon" type="button" aria-label="Удалить" />
      <div className="cards-list__area">
        <h3 className="cards-list__title">{props.cardName}</h3>
        <div className="cards-list__like-area">
          <button className="cards-list__like-icon" type="button" aria-label="Нравится" />
          <p className="cards-list__like-amount-text">{props.cardLikesLength}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
