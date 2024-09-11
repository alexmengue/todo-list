const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const completeList = document.querySelector('.list-tasks');

let tasksList = [];

function addNewTask() {
  tasksList.push({
    task: input.value,
    concluded: false
  });
  input.value = '';
  showTasks();
}

function showTasks() {
  let newLi = '';

  tasksList.forEach((item, index) => {
    newLi = newLi + `
      <li class="task ${item.concluded && "done"}">
        <img src="assets/img/checked.png" alt="tarefa marcada" onclick="concludeTask(${index})" />
        <p>${item.task}</p>
        <img src="assets/img/trash.png" alt="tarefa excluída" onclick="deleteItem(${index})" />
      </li>
    `
  });

  completeList.innerHTML = newLi;
};

function concludeTask(index) {
  tasksList[index].concluded = !tasksList[index].concluded;
  showTasks();
}

function deleteItem(index) {
  tasksList.splice(index, 1)
  showTasks();
}

button.addEventListener('click', addNewTask);