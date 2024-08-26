const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');

let tasksList = [];

button.addEventListener('click', () => {
  tasksList.push(input.value)
  showTasks();
});

function showTasks() {
  let newLi = '';

  // <li class="task">
  //   <img src="assets/img/checked.png" alt="tarefa marcada" />
  //   <p>tarefa 1</p>
  //   <img src="assets/img/trash.png" alt="tarefa excluída" />
  // </li>
};