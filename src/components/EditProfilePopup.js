import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
  // Определяем переменные внутреннего состояния
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  // Подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  // Функция-обработчик изменения инпута имени обновляет стейт name
  function handleChangeName(e) {
    setName(e.target.value);
  }

  // Функция-обработчик изменения инпута занятия обновляет стейт description
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const inputListValuesObject = {
      name,
      about: description,
    }
    // Передаём объект со значениями управляемых компонентов во внешний обработчик
    props.onUpdateUser(inputListValuesObject);
  }

  // Возвращаем JSX-разметку компонента EditProfilePopup
  return (
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input className="popup__field popup__field_el_name" type="text" name="popup__field_el_name" id="name-field" placeholder="Имя" required minLength="2" maxLength="40" value={name} onChange={handleChangeName} />
      <span className="popup__error" id="name-field-error" />
      <input className="popup__field popup__field_el_profession" type="text" name="popup__field_el_profession" id="profession-field" placeholder="Занятие" required minLength="2" maxLength="200" value={description} onChange={handleChangeDescription} />
      <span className="popup__error" id="profession-field-error" />
      <button className="popup__save-button popup__save-button_type_profile" type="submit">Сохранить</button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
