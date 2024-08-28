`use strict`;
// import darkmode package

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
const item = document.querySelector(".p-item");
const exchange = document.querySelector(".exchange-theme");

//  function to create new todo html
const createTodoHTML = (value) => {
  return `<li class="todo">
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
        </li>`;
};
// Func Add Todo
const addTodoFunc = () => {
  addTodo.addEventListener("click", () => {
    if (input.value.trim() !== "") {
      todoList.insertAdjacentHTML("beforeend", createTodoHTML(input.value));
      input.value = "";
      liNumber();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
      e.preventDefault();
      todoList.insertAdjacentHTML("beforeend", createTodoHTML(input.value));
      input.value = "";
      liNumber();
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
    decreaseNumber();
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
  item.textContent = "0 item";
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

// number of item
const liNumber = () => {
  const number = document.querySelectorAll(".todo").length;
  item.textContent = `${number} items`;
};

// reduce number of items
const decreaseNumber = () => {
  const number = document.querySelectorAll(".todo").length + 1;
  item.textContent = `${number - 1} items`;
};

////////////////////////
let sun = `<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />`;
let moon = `<svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>`;

// exchange icon
exchange.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    document.body.style.backgroundImage =
      "url('assets/images/bg-desktop-dark.jpg')";
    document.querySelector(".exchange-theme").innerHTML = sun;
  } else {
    document.body.style.backgroundImage =
      "url('assets/images/bg-desktop-light.jpg')";
    document.querySelector(".exchange-theme").innerHTML = moon;
  }
});

// Calling Function
addTodoFunc();
