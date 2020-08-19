import { Api } from './api.js';

// Создаём объект api класса Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-13',
  headers: {
    authorization: 'fec7b8f9-403f-4d91-ad40-57682e4afbf3',
    'Content-Type': 'application/json'
  }
});

export { api };
