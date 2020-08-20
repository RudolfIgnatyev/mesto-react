import React from 'react';

function ImagePopup(props) {
  // Возвращаем JSX-разметку компонента ImagePopup
  return (
    <section className={`popup popup_type_images ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__image-container">
        <button className="popup__close-icon popup__close-icon_type_images" type="button" aria-label="Закрыть" onClick={props.onClose} />
        <img className="popup__image" src={`${props.card.link}`} alt={props.card.name} />
        <p className="popup__caption">{props.card.name}</p>
      </div>
    </section>
  );
}

export default ImagePopup;
