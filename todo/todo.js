document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const addBtn = document.getElementById("add-button");

  addBtn.addEventListener("click", function () {
    const todo = todoInput.value;
    if (todo === "") return alert("할 일을 입력해주세요.");
    const li = document.createElement("li");
    li.textContent = todo;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.addEventListener("click", function () {
      todoList.removeChild(li);
    });
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    todoInput.value = "";
  });
});