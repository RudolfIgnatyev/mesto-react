import React from 'react';
import PopupWithForm from './PopupWithForm';
import Card from './Card';
import ImagePopup from './ImagePopup';
import { api } from '../utils/utils.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {
  // Определяем переменную внутреннего состояния
  const [cards, setCards] = React.useState([]);
  // Подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    // Загружаем начальные карточки
    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Возвращаем JSX-разметку компонента Main
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__area">
            <button className="profile__avatar-edit-button" type="button" aria-label="Редактировать аватар" onClick={props.onEditAvatar}>
              <img className="profile__avatar" alt="Аватар пользователя" src={`${currentUser.avatar}`} />
            </button>
            <div className="profile__info">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile} />
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace} />
        </div>
      </section>

      <section className="elements">
        <ul className="cards-list">
          {cards.map(card =>
            <Card card={card} key={card._id} cardName={card.name} cardLikesLength={card.likes.length} cardLink={card.link} onCardClick={props.onCardImage} />
          )}
        </ul>
      </section>

      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={props.isEditProfilePopupOpen} onClose={props.onCloseAllPopups}>
        <input className="popup__field popup__field_el_name" type="text" name="popup__field_el_name" id="name-field" placeholder="Имя" required minLength="2" maxLength="40" />
        <span className="popup__error" id="name-field-error" />
        <input className="popup__field popup__field_el_profession" type="text" name="popup__field_el_profession" id="profession-field" placeholder="Занятие" required minLength="2" maxLength="200" />
        <span className="popup__error" id="profession-field-error" />
        <button className="popup__save-button popup__save-button_type_profile" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="cards" title="Новое место" isOpen={props.isAddPlacePopupOpen} onClose={props.onCloseAllPopups}>
        <input className="popup__field popup__field_el_place" type="text" name="name" id="place-field" placeholder="Название" required minLength="1" maxLength="30" />
        <span className="popup__error" id="place-field-error" />
        <input className="popup__field popup__field_el_link" type="url" name="link" id="link-field" placeholder="Ссылка на картинку" required />
        <span className="popup__error" id="link-field-error" />
        <button className="popup__save-button popup__save-button_type_cards popup__save-button_disabled" type="submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isEditAvatarPopupOpen} onClose={props.onCloseAllPopups}>
        <input className="popup__field popup__field_el_avatar" type="url" name="avatar" id="avatar-field" placeholder="Ссылка на картинку" required />
        <span className="popup__error" id="avatar-field-error" />
        <button className="popup__save-button popup__save-button_type_avatar popup__save-button_disabled" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="card-deletion" title="Вы уверены?">
        <button className="popup__save-button popup__save-button_type_card-deletion" type="submit">Да</button>
      </PopupWithForm>

      <ImagePopup card={props.selectedCard} onClose={props.onCloseAllPopups} />
    </main>
  );
}

export default Main;
