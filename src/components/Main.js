import React from 'react';
import '../index.css';
import ImagePopup from './ImagePopup';

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__area">
            <button className="profile__avatar-edit-button" type="button" aria-label="Редактировать аватар" onClick={props.onEditAvatar}>
              <img className="profile__avatar" alt="Аватар пользователя" />
            </button>
            <div className="profile__info">
              <h1 className="profile__title" />
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile} />
              <p className="profile__subtitle" />
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace} />
        </div>
      </section>

      <section className="elements">
        <ul className="cards-list" />
      </section>

      <ImagePopup />
    </main>
  );
}

export default Main;
