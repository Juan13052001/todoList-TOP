import "./styles.css";
import Proyecto from "./class/Proyectos";
import Tareas from "./class/Tareas";
import TodoList from "./class/TodoList.class";

const todoList = new TodoList();

const buttonAdd = document.querySelector(".projects__add");

const addProyectoModal = document.querySelector(".new-project-box-container");

const inputTitleProyecto = document.querySelector(".title-input");

const inputDescriptionProyecto = document.querySelector(".description-input");

const divProyectoTitle = document.querySelector(".project-name-input");

const btnAddProyecto = document.querySelector(".add-btn");

buttonAdd.addEventListener("click", (e) => {
    console.log(e);
    addProyectoModal.style.display = "block";
});

btnAddProyecto.addEventListener("click", (e) => {
    let title = inputTitleProyecto.value;
    let description = inputDescriptionProyecto.value;

    todoList.addProyecto(title, description);
    console.log(todoList);
    addProyectoModal.style.display = "none";
});
