const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const btn = document.querySelector('.form__btn');
const errorIcon = document.querySelector('.form__icon-error');
const errorText = document.querySelector('.form__text-error');
const errorElements = [input, btn, errorIcon, errorText];

window.onload = function () {
  input.value = '';
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(input.value);
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
    input.value = '';
    alert('Email successfully submitted!');
  } else {
    errorElements.forEach((el) => {
      el.dataset.error = 'true';
    });
    console.log(`Email <${input.value}> is not properly formated!`);
  }
});
