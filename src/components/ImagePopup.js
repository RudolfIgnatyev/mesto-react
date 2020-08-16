import React from 'react';
import '../index.css';

function ImagePopup() {
  return (
    <section className="popup popup_type_images">
      <div className="popup__image-container">
        <button className="popup__close-icon popup__close-icon_type_images" type="button" aria-label="Закрыть" />
        <img className="popup__image" />
        <p className="popup__caption" />
      </div>
    </section>
  );
}

export default ImagePopup;
