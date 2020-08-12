import React from 'react';
import '../index.css';
import PopupWithForm from './PopupWithForm';

function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_profile').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_cards').classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__area">
            <button className="profile__avatar-edit-button" type="button" aria-label="Редактировать аватар" onClick={handleEditAvatarClick}>
              <img className="profile__avatar" alt="Аватар пользователя" />
            </button>
            <div className="profile__info">
              <h1 className="profile__title" />
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={handleEditProfileClick} />
              <p className="profile__subtitle" />
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={handleAddPlaceClick} />
        </div>
      </section>

      <section className="elements">
        <ul className="cards-list" />
      </section>

      <PopupWithForm name="profile" title="Редактировать профиль">
        <input className="popup__field popup__field_el_name" type="text" name="popup__field_el_name" id="name-field" placeholder="Имя" required minlength="2" maxlength="40" />
        <span className="popup__error" id="name-field-error" />
        <input className="popup__field popup__field_el_profession" type="text" name="popup__field_el_profession" id="profession-field" placeholder="Занятие" required minlength="2" maxlength="200" />
        <span className="popup__error" id="profession-field-error" />
        <button className="popup__save-button popup__save-button_type_profile" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="cards" title="Новое место">
        <input className="popup__field popup__field_el_place" type="text" name="name" id="place-field" placeholder="Название" required minlength="1" maxlength="30" />
        <span className="popup__error" id="place-field-error" />
        <input className="popup__field popup__field_el_link" type="url" name="link" id="link-field" placeholder="Ссылка на картинку" required />
        <span className="popup__error" id="link-field-error" />
        <button className="popup__save-button popup__save-button_type_cards popup__save-button_disabled" type="submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар">
        <input className="popup__field popup__field_el_avatar" type="url" name="avatar" id="avatar-field" placeholder="Ссылка на картинку" required />
        <span className="popup__error" id="avatar-field-error" />
        <button className="popup__save-button popup__save-button_type_avatar popup__save-button_disabled" type="submit">Сохранить</button>
      </PopupWithForm>

      <section className="popup popup_type_images">
        <div className="popup__image-container">
          <button className="popup__close-icon popup__close-icon_type_images" type="button" aria-label="Закрыть" />
          <img className="popup__image" />
          <p className="popup__caption" />
        </div>
      </section>

      <PopupWithForm name="card-deletion" title="Вы уверены?">
        <button className="popup__save-button popup__save-button_type_card-deletion" type="submit">Да</button>
      </PopupWithForm>
    </main>
  );
}

export default Main;
