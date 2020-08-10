import React from 'react';
import headerLogo from './images/header-logo.svg';
import './index.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <img className="header__logo" src={headerLogo} alt="логотип Mesto Russia" />
      </header>
      <main className="content">
        <section className="profile">
          <div className="profile__container">
            <div className="profile__area">
              <button className="profile__avatar-edit-button" type="button" aria-label="Редактировать аватар">
                <img className="profile__avatar" alt="Аватар пользователя" />
              </button>
              <div className="profile__info">
                <h1 className="profile__title" />
                <button className="profile__edit-button" type="button" aria-label="Редактировать" />
                <p className="profile__subtitle" />
              </div>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить" />
          </div>
        </section>

        <section className="elements">
          <ul className="cards-list" />
        </section>

        <section className="popup popup_type_profile">
          <form className="popup__container popup__container_type_profile" name="popup__container_type_profile" action="#" method="POST">
            <h2 className="popup__title">Редактировать профиль</h2>
            <input className="popup__field popup__field_el_name" type="text" name="popup__field_el_name" id="name-field" placeholder="Введите имя" required minlength="2" maxlength="40" />
            <span className="popup__error" id="name-field-error" />
            <input className="popup__field popup__field_el_profession" type="text" name="popup__field_el_profession" id="profession-field" placeholder="Введите профессию" required minlength="2" maxlength="200" />
            <span className="popup__error" id="profession-field-error" />
            <button className="popup__save-button popup__save-button_type_profile" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-icon popup__close-icon_type_profile" type="button" aria-label="Закрыть" />
        </section>

        <section className="popup popup_type_cards">
          <form className="popup__container popup__container_type_cards" name="popup__container_type_cards" action="#" method="POST">
            <h2 className="popup__title">Новое место</h2>
            <input className="popup__field popup__field_el_place" type="text" name="name" id="place-field" placeholder="Название" required minlength="1" maxlength="30" />
            <span className="popup__error" id="place-field-error" />
            <input className="popup__field popup__field_el_link" type="url" name="link" id="link-field" placeholder="Ссылка на картинку" required />
            <span className="popup__error" id="link-field-error" />
            <button className="popup__save-button popup__save-button_type_cards popup__save-button_disabled" type="submit">Создать</button>
          </form>
          <button className="popup__close-icon popup__close-icon_type_cards" type="button" aria-label="Закрыть" />
        </section>

        <section className="popup popup_type_avatar">
          <form className="popup__container popup__container_type_avatar" name="popup__container_type_avatar" action="#" method="POST">
            <h2 className="popup__title popup__title_type_avatar">Обновить аватар</h2>
            <input className="popup__field popup__field_el_avatar" type="url" name="avatar" id="avatar-field" placeholder="Ссылка на картинку" required />
            <span className="popup__error" id="avatar-field-error" />
            <button className="popup__save-button popup__save-button_type_avatar popup__save-button_disabled" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-icon popup__close-icon_type_avatar" type="button" aria-label="Закрыть" />
        </section>

        <section className="popup popup_type_images">
          <div className="popup__image-container">
            <button className="popup__close-icon popup__close-icon_type_images" type="button" aria-label="Закрыть" />
            <img className="popup__image" />
            <p className="popup__caption" />
          </div>
        </section>

        <section className="popup popup_type_card-deletion">
          <form className="popup__container popup__container_type_card-deletion" name="popup__container_type_card-deletion" action="#" method="POST">
            <h2 className="popup__title popup__title_type_card-deletion">Вы уверены?</h2>
            <button className="popup__save-button popup__save-button_type_card-deletion" type="submit">Да</button>
          </form>
          <button className="popup__close-icon popup__close-icon_type_card-deletion" type="button" aria-label="Закрыть" />
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>
    </div>
  );
}

export default App;
