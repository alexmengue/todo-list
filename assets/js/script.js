const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const completeList = querySelector('.list-tasks');

let tasksList = [];

button.addEventListener('click', () => {
  tasksList.push(input.value)
  showTasks();
});

function showTasks() {
  let newLi = '';

  tasksList.forEach(task => {
    newLi = newLi + `
      <li class="task">
        <img src="assets/img/checked.png" alt="tarefa marcada" />
        <p>${task}</p>
        <img src="assets/img/trash.png" alt="tarefa excluída" />
      </li>
    `
  });
};