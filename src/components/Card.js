import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card(props) {
  // Подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (`${isOwn ? 'cards-list__delete-icon' : 'cards-list__delete-icon_hidden'}`);
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (`${isLiked ? 'cards-list__like-icon_active' : 'cards-list__like-icon'}`);;

  function handleClick() {
    props.onCardClick(props.card);
  }

  // Возвращаем JSX-разметку компонента Card
  return (
    <li className="cards-list__item">
      <img className="cards-list__image" src={props.cardLink} alt={props.cardName} onClick={handleClick} />
      <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить" />
      <div className="cards-list__area">
        <h3 className="cards-list__title">{props.cardName}</h3>
        <div className="cards-list__like-area">
          <button className={cardLikeButtonClassName} type="button" aria-label="Нравится" />
          <p className="cards-list__like-amount-text">{props.cardLikesLength}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
