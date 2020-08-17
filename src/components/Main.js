import React from 'react';
import '../index.css';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api.js';

function Main(props) {
  const [userName, setUserName] = React.useState(false);
  const [userDescription, setUserDescription] = React.useState(false);
  const [userAvatar, setUserAvatar] = React.useState(false);

  React.useEffect(() => {
    // Загружаем информацию о пользователе
    api.getUserInfo()
      .then((initialUserInfo) => {
        setUserName(initialUserInfo.name);
        setUserDescription(initialUserInfo.about);
        setUserAvatar(initialUserInfo.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__area">
            <button className="profile__avatar-edit-button" type="button" aria-label="Редактировать аватар" onClick={props.onEditAvatar}>
              <img className="profile__avatar" alt="Аватар пользователя" src={`${userAvatar}`} />
            </button>
            <div className="profile__info">
  <h1 className="profile__title">{userName}</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile} />
              <p className="profile__subtitle">{userDescription}</p>
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
