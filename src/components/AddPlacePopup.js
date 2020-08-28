import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  // Определяем переменные внутреннего состояния
  const [place, setPlace] = React.useState('');
  const [link, setLink] = React.useState('');

  // Функция-обработчик изменения инпута имени обновляет стейт name
  function handleChangePlace(e) {
    setPlace(e.target.value);
  }

  // Функция-обработчик изменения инпута занятия обновляет стейт description
  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const inputListValuesObject = {
      name: place,
      link,
    }
    // Передаём объект inputListValuesObject со значениями управляемых компонентов во внешний обработчик
    props.onAddPlace(inputListValuesObject);
  }

  // Возвращаем JSX-разметку компонента AddPlacePopup
  return (
    <PopupWithForm name="cards" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input className="popup__field popup__field_el_place" type="text" name="name" id="place-field" placeholder="Название" required minLength="1" maxLength="30" value={place} onChange={handleChangePlace} />
      <span className="popup__error" id="place-field-error" />
      <input className="popup__field popup__field_el_link" type="url" name="link" id="link-field" placeholder="Ссылка на картинку" required value={link} onChange={handleChangeLink} />
      <span className="popup__error" id="link-field-error" />
      <button className="popup__save-button popup__save-button_type_cards" type="submit">Создать</button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
