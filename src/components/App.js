import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';

function App() {
  // Определяем переменные внутреннего состояния
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen ? true : false} onClose={closeAllPopups}>
        <input className="popup__field popup__field_el_name" type="text" name="popup__field_el_name" id="name-field" placeholder="Имя" required minLength="2" maxLength="40" />
        <span className="popup__error" id="name-field-error" />
        <input className="popup__field popup__field_el_profession" type="text" name="popup__field_el_profession" id="profession-field" placeholder="Занятие" required minLength="2" maxLength="200" />
        <span className="popup__error" id="profession-field-error" />
        <button className="popup__save-button popup__save-button_type_profile" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="cards" title="Новое место" isOpen={isAddPlacePopupOpen ? true : false} onClose={closeAllPopups}>
        <input className="popup__field popup__field_el_place" type="text" name="name" id="place-field" placeholder="Название" required minLength="1" maxLength="30" />
        <span className="popup__error" id="place-field-error" />
        <input className="popup__field popup__field_el_link" type="url" name="link" id="link-field" placeholder="Ссылка на картинку" required />
        <span className="popup__error" id="link-field-error" />
        <button className="popup__save-button popup__save-button_type_cards popup__save-button_disabled" type="submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen ? true : false} onClose={closeAllPopups}>
        <input className="popup__field popup__field_el_avatar" type="url" name="avatar" id="avatar-field" placeholder="Ссылка на картинку" required />
        <span className="popup__error" id="avatar-field-error" />
        <button className="popup__save-button popup__save-button_type_avatar popup__save-button_disabled" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="card-deletion" title="Вы уверены?">
        <button className="popup__save-button popup__save-button_type_card-deletion" type="submit">Да</button>
      </PopupWithForm>
      <Footer />
    </div>
  );
}

export default App;
