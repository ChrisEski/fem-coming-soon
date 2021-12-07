const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const errorIcon = document.querySelector('.form__icon-error');
const errorText = document.querySelector('.form__text-error');
const errorElements = [input, errorIcon, errorText];

window.onload = function () {
  input.value = '';
};

const errorStatus = (status) => {
  errorElements.forEach((el) => {
    el.dataset.error = `${status}`;
  });
};

const validateEmail = () => {
  const email = input.value;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    console.log(`Email <${email}> is not properly formated!`);
    errorStatus(true);
  } else {
    alert('Email successfully submitted!');
    errorStatus(false);
    input.value = '';
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateEmail();
});
