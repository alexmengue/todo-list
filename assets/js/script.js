const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const completeList = document.querySelector('.list-tasks');

let tasksList = [];

function addNewTask() {
  tasksList.push(input.value);
  input.value = '';
  showTasks();
}

function showTasks() {
  let newLi = '';

  tasksList.forEach((task, index) => {
    newLi = newLi + `
      <li class="task">
        <img src="assets/img/checked.png" alt="tarefa marcada" />
        <p>${task}</p>
        <img src="assets/img/trash.png" alt="tarefa excluída" onclick="deleteItem(${index})" />
      </li>
    `
  });

  completeList.innerHTML = newLi;
};


function deleteItem(index) {
  console.log('item excluido');
}

button.addEventListener('click', addNewTask);