import TodoList from "../class/TodoList.class";

const todoList = new TodoList();

const buttonAdd = document.querySelector(".projects__add");

const addProyectoModal = document.querySelector(".new-project-box-container");

const addTaskModal = document.querySelector(".new-task-box-container");

const inputTitleProyecto = document.querySelector(".title-input");

const inputDescriptionProyecto = document.querySelector(".description-input");

const divProyectoTitle = document.querySelector(".project-name-input");

const btnAddProyecto = document.querySelector(".add-btn");

const btnRemoveProyecto = document.querySelector(
    ".projects__btn-remove-project"
);

const btnCancelProyecto = document.querySelector(".cancel-project-btn");

const btnRemoveTask = document.querySelector(".btn__remove-task");

const btnCancelTask = document.querySelector(".cancel-task-btn");

const divProyectos = document.querySelector(".projects__container-name");

const proyectosDescription = document.querySelector(".project__displayer");

const description = document.querySelector(".description-text");

const containerTareas = document.querySelector(".tasks__container");

const taskInputName = document.querySelector(".task-name-input");

const taskSelectPriority = document.querySelector(".task-priority-select");

const taskInputDate = document.querySelector(".dueDateInput");

const btnAddNewTask = document.querySelector(".btn__new-task");

const btnAddTask = document.querySelector(".add-task-btn");

let getAllProyectos = () => {
    return document.querySelectorAll(".proyectos");
};

function addProyecto() {
    let title = inputTitleProyecto.value;
    let description = inputDescriptionProyecto.value;
    if (title.length > 0 && description.length > 0) {
        inputTitleProyecto.value = "";
        inputDescriptionProyecto.value = "";
        todoList.addProyecto(title, description);
        console.log(todoList);
        hideModal();
        mostrarProyectos();
        addEventos();
    } else {
        alert("Por favor llena los datos correspondientes");
    }
}

function hideModal() {
    addProyectoModal.style.display = "none";
}

function showModal() {
    addProyectoModal.style.display = "block";
}

function mostrarProyectos() {
    divProyectos.textContent = "";
    todoList.proyectos.forEach((proyecto) => {
        const newProyecto = document.createElement("h4");
        newProyecto.classList.add("proyectos");
        newProyecto.innerText = proyecto.title;
        divProyectos.append(newProyecto);
    });
}

function getActivo() {
    return document.querySelector(".activo").innerText;
}

function getProyecto() {
    const nameProyecto = getActivo();
    const proyectoActivo = todoList.proyectos.filter(
        (proyecto) => proyecto.title === nameProyecto
    );
    return proyectoActivo;
}

function handleProyectoClick(e) {
    removeActivoClass();
    addActivoClass(e);
    proyectosDescription.classList.add("show");
    const proyecto = getProyecto();
    mostrarDescriptionAlClick(proyecto);
    mostrarTareas();
}

function actualizarProyecto(e) {
    proyectosDescription.classList.add("show");
    const proyecto = getProyecto();
    mostrarDescriptionAlClick(proyecto);
    mostrarTareas();
}

function removeActivoClass() {
    const divsProyectos = getAllProyectos();
    [...divsProyectos].forEach((proyecto) => {
        proyecto.classList.remove("activo");
    });
}

function addActivoClass(e) {
    e.target.classList.add("activo");
}

function removerProyecto() {
    const proyectoName = getActivo();
    todoList.removeProyecto(proyectoName);
    mostrarProyectos();
    addEventos();
    mostrarTareas();
}

function mostrarDescription(proyecto) {
    description.innerText = proyecto.description;
}
function mostrarDescriptionAlClick(proyecto) {
    description.innerText = proyecto[0].description;
}
function addEventos() {
    const Proyectos = getAllProyectos();
    [...Proyectos].forEach((proyecto) => {
        proyecto.addEventListener("click", handleProyectoClick);
    });
}

function mostrarTareas() {
    containerTareas.textContent = "";
    const proyectoActivo = getActivo();
    const proyecto = todoList.proyectos.find(
        (proyecto) => proyecto.title === proyectoActivo
    );
    const tareas = proyecto.tasks;
    const tareasFiltradas = tareas.filter((tarea) => {
        return tarea.priority !== null;
    });
    if (tareasFiltradas.length <= 0) return;

    tareasFiltradas.forEach((tarea) => {
        const tareaH4 = document.createElement("h4");
        const prioridad = tarea.priority;
        tareaH4.classList.add("tarea");
        tareaH4.classList.add(`${prioridad}-tarea`);
        tareaH4.addEventListener("click", seleccionarTarea);
        tareaH4.innerText = tarea.title;
        containerTareas.appendChild(tareaH4);
    });
}

function seleccionarTarea(e) {
    const tasksAll = document.querySelectorAll(".tarea");
    [...tasksAll].forEach((tarea) => {
        tarea.classList.remove("task-activo");
    });
    e.target.classList.add("task-activo");
}

function removeTarea() {
    const proyectoName = getActivo();
    const proyecto = document.querySelector(".activo");
    const nameTarea = document.querySelector(".task-activo").textContent;
    todoList.removeTask(nameTarea, proyectoName);
    actualizarProyecto(proyecto);
    mostrarTareas();
}

function showModalTask() {
    addTaskModal.style.display = "block";
}

function ocultarModalTask() {
    addTaskModal.style.display = "none";
    taskInputName.value = "";
}

function addTask() {
    if (
        taskInputName.value.length > 0 &&
        taskSelectPriority.value.length > 0 &&
        taskInputDate.value.length > 0
    ) {
        const proyecto = getActivo();
        const title = taskInputName.value;
        const priority = taskSelectPriority.value;
        const dueDate = taskInputDate.value;
        todoList.addTask(title, priority, dueDate, proyecto);
        ocultarModalTask();
        mostrarTareas();
    }
}

buttonAdd.addEventListener("click", showModal);

btnAddProyecto.addEventListener("click", addProyecto);

btnRemoveProyecto.addEventListener("click", removerProyecto);

btnCancelProyecto.addEventListener("click", hideModal);

btnAddNewTask.addEventListener("click", showModalTask);

btnRemoveTask.addEventListener("click", ocultarModalTask);

btnAddTask.addEventListener("click", addTask);

btnCancelTask.addEventListener("click", ocultarModalTask);

btnRemoveTask.addEventListener("click", removeTarea);

export { mostrarProyectos, addEventos };
