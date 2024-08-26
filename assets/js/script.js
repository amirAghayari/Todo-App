`use strict`;

// select
const input = document.querySelector(".todo-input");
const addTodo = document.querySelector(".add-todo-btn");
const myTodo = document.querySelector(".p");
const todoList = document.querySelector(".todo-list");
const deleteBtns = document.querySelectorAll(".delete-btn");
//  function to create new todo html
const createTodoHTML = (value) => {
  return `<div class="todo">
          <div class="div">
            <button class="do-btn"></button>
            <p class="p">${value}</p>
          </div>
          <button class="delete-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              class="size-7"
            >
              <path
                d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"
              ></path>
            </svg>
          </button>
        </div>`;
};
// Func Add Todo
const addTodoFunc = () => {
  addTodo.addEventListener("click", () => {
    if (input.value.trim() !== "") {
      todoList.insertAdjacentHTML("beforeend", createTodoHTML(input.value));
      input.value = "";
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
      e.preventDefault();
      todoList.insertAdjacentHTML("beforeend", createTodoHTML(input.value));
      input.value = "";
    }
  });
};

input.addEventListener("click", () => {
  input.setAttribute("value", "");
});

// Function for delete Todo
todoList.addEventListener("click", (event) => {
  if (event.target.closest(".delete-btn")) {
    event.target.closest(".todo").remove();
  }
});

// Calling Function
addTodoFunc();
