const todoList = document.getElementById('todoList');

function addItem() {
  const input = document.getElementById('itemInput');
  const value = input.value.trim();
  if (value === '') return;

  const li = document.createElement('li');
  li.textContent = value;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  input.value = '';
}

function toggleList() {
  todoList.classList.toggle('hidden');
}
