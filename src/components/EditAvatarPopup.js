import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  // Определяем переменную объекта, возвращаемого хуком
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const inputValueObject = {
      avatar: inputRef.current.value,
    }
    // Передаём объект inputValueObject со значениями управляемых компонентов во внешний обработчик
    props.onUpdateAvatar(inputValueObject);
  }

  // Возвращаем JSX-разметку компонента EditAvatarPopup
  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input className="popup__field popup__field_el_avatar" type="url" name="avatar" id="avatar-field" placeholder="Ссылка на картинку" required ref={inputRef} />
      <span className="popup__error" id="avatar-field-error" />
      <button className="popup__save-button popup__save-button_type_avatar" type="submit">Сохранить</button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
