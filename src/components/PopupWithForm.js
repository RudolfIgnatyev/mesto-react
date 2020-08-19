import React from 'react';
import '../index.css';

function PopupWithForm(props) {
  // Возвращаем JSX-разметку компонента PopupWithForm
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <form className={`popup__container popup__container_type_${props.name}`} name={`popup__container_type_${props.name}`} action="#" method="POST">
        <h2 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h2>
        {props.children}
      </form>
      <button className={`popup__close-icon popup__close-icon_type_${props.name}`} type="button" aria-label="Закрыть" onClick={props.onClose} />
    </section>
  );
}

export default PopupWithForm;
