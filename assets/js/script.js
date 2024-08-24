const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');

let tasksList = [];

button.addEventListener('click', () => {
  tasksList.push(input.value)
});