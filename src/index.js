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

const divProyectos = document.querySelector(".projects__container-name");

buttonAdd.addEventListener("click", (e) => {
    console.log(e);
    addProyectoModal.style.display = "block";
});

btnAddProyecto.addEventListener("click", (e) => {
    let title = inputTitleProyecto.value;
    let description = inputDescriptionProyecto.value;
    if (title.length > 0 && description.length > 0) {
        inputTitleProyecto.value = "";
        inputDescriptionProyecto.value = "";
        todoList.addProyecto(title, description);
        console.log(todoList);
        addProyectoModal.style.display = "none";
        mostrarProyectos();
    } else {
        alert("Por favor llena los datos correspondientes");
    }
});

function mostrarProyectos() {
    divProyectos.textContent = "";
    todoList.proyectos.forEach((proyecto) => {
        const newProyecto = document.createElement("h4");
        newProyecto.classList.add("proyectos");
        newProyecto.innerText = proyecto.title;
        divProyectos.append(newProyecto);
    });
}
