const todoInput = document.querySelector("#new-todo-title");
const todoList = document.querySelector("#todo-list");

const toggleChange = (e) => {
    const { checked } = e.target;
    e.target.setAttribute("checked", checked);
    let parentTag = e.target;
    for (; parentTag.nodeName !== "LI"; parentTag = parentTag.parentElement);
    parentTag.classList.toggle("completed");
};
const deleteTodo = (e) => {
    let parentTag = e.target;
    for (; parentTag.nodeName !== "LI"; parentTag = parentTag.parentElement);
    parentTag.remove();
};

const dbclickLi = (e) => {
    e.currentTarget.classList.add("editing");
};

const keyEvent = (e) => {
    let parentTag = e.target;
    if (e.key === "Escape") {
        for (; parentTag.nodeName !== "LI"; parentTag = parentTag.parentElement);
        parentTag.classList.remove("editing");
    } else if (e.key === "Enter") {
        for (; parentTag.nodeName !== "LABEL"; parentTag = parentTag.parentElement);
        console.log(parentTag);
    }
};

const addTodo = ({ target }) => {
    const todoTemplate = `
    <li ondblclick="dbclickLi(event)">
    <div class="view">
      <input class="toggle" type="checkbox" onchange="toggleChange(event)"/>
      <label class="label">${target.value}</label>
      <button class="destroy" onclick="deleteTodo(event)"></button>
    </div>
    <input class="edit" value=${target.value} onkeyup="keyEvent(event)"/>
  </li>
    `;
    todoList.innerHTML += todoTemplate;
    todoInput.value = "";
};

todoInput.addEventListener("change", addTodo);
