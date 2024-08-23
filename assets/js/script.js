const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');

button.addEventListener('click', () => {
  console.log(input.value);
});