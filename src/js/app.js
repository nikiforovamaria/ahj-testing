import validator from './validator';
import luhnAlgorithm from './luhnAlgorithm';

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.cards__icon');
  const input = document.querySelector('#validate-form__input');
  const form = document.querySelector('.validate-form');
  const resetBtn = document.querySelector('.reset-button');
  const msg = document.querySelector('.validate-form__message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validator(input.value) && luhnAlgorithm(input.value)) {
      cards.forEach((item) => item.classList.add('icon__inactive'));
      const cardID = validator(input.value);
      const card = document.querySelector(cardID);
      card.classList.remove('icon__inactive');
      card.classList.add('icon__active');
      input.classList.add('valid');
      msg.classList.add('message_valid');
      msg.textContent = 'Card is valid!';
    } else {
      cards.forEach((item) => item.classList.add('icon__inactive'));
      input.classList.add('invalid');
      msg.classList.add('message_invalid');
      msg.textContent = 'Card is not valid!';
    }
  });

  resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cards.forEach((item) => item.classList.remove('icon__inactive'));
    cards.forEach((item) => item.classList.remove('icon__active'));
    input.classList.remove('valid');
    input.classList.remove('invalid');
    input.value = '';
    msg.classList.remove('message_valid');
    msg.classList.remove('message_invalid');
    msg.textContent = '';
  });
});
