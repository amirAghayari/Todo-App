`use strict`;

// select
const input = document.querySelector(".todo-input");
const addTodo = document.querySelector(".add-todo-btn");
const myTodo = document.querySelector(".p");
const todoList = document.querySelector(".todo-list");
const todo = document.querySelector(".todo");
const deleteBtns = document.querySelectorAll(".delete-btn");
const doBtn = document.querySelector(".do-btn");
const clear = document.querySelector(".clear-btn");
const activeElement = document.querySelectorAll("todo-list");
const activeTodo = document.querySelector(".active-btn");
const compledTodo = document.querySelector(".compled-btn");
const allTodo = document.querySelector(".all-btn");
//  function to create new todo html
const createTodoHTML = (value) => {
  return `<div class="todo">
          <div class="div">
            <button class="do-btn"> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg></button>
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

// Function for delete Todo and mark task
todoList.addEventListener("click", (event) => {
  if (event.target.closest(".delete-btn")) {
    event.target.closest(".todo").remove();
  }
  if (event.target.closest(".do-btn")) {
    const todoItem = event.target.closest(".todo").querySelector(".p");
    todoItem.classList.toggle("active");
  }

  if (event.target.closest(".size-8")) {
    const todoIcon = event.target.closest(".todo").querySelector(".size-8");
    todoIcon.classList.toggle("active");
  }
});

// clear completed
clear.addEventListener("click", () => {
  todoList.innerHTML = "";
});

// active Todo Event
activeTodo.addEventListener("click", () => {
  const todos = document.querySelectorAll(".todo");
  todos.forEach((todo) => {
    if (todo.querySelector(".p").classList.contains("active")) {
      todo.style.display = "none";
    }
  });
});

// compled Todo Event
compledTodo.addEventListener("click", () => {
  const todos = document.querySelectorAll(".todo");
  todos.forEach((todo) => {
    if (!todo.querySelector(".p").classList.contains("active")) {
      todo.style.display = "none";
    }
  });
});

// all Todo Event
allTodo.addEventListener("click", () => {
  const todos = document.querySelectorAll(".todo");
  todos.forEach((todo) => {
    todo.style.display = "flex";
  });
});
// Calling Function
addTodoFunc();
