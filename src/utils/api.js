class Api {
  constructor({ baseUrl, headers = {} }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  // Метод проверки промиса с его разрешением или отклонением в зависимости от ответа сервера
  _checkPromise(res) {
    if (res.ok) {
      return res.json();
    }

    // Если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // Публичный метод загрузки с сервера информации о пользователе
  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers
    })
      .then(res => this._checkPromise(res));
  }

  // Публичный метод загрузки с сервера начальных карточек
  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'GET',
      headers: this.headers
    })
      .then(res => this._checkPromise(res));
  }

  // Публичный метод редактирования профиля с сохранением данных на сервере
  patchProfileInfo(profileNewInfo) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(profileNewInfo)
    })
      .then(res => this._checkPromise(res));
  }

  // Публичный метод добавления на сервер новой карточки
  postNewCard(item) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(item)
    })
      .then(res => this._checkPromise(res));
  }

  // Публичный метод удаления из сервера карточки
  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    })
      .then(res => this._checkPromise(res));
  }

  // Публичный метод изменения статуса "лайка" карточки на сервере
  changeLikeCardStatus(cardId, isWillLike) {
    let currentQueryMethod = isWillLike ? 'PUT' : 'DELETE';

    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: currentQueryMethod,
      headers: this.headers
    })
      .then(res => this._checkPromise(res));
  }

  // Публичный метод изменения на сервере аватара пользователя
  patchAvatar(avatar) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(avatar)
    })
      .then(res => this._checkPromise(res));
  }
}

export { Api };
