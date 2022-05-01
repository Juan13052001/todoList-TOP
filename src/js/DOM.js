/* eslint-disable no-use-before-define */
import Swal from 'sweetalert2';

import TodoList from '../class/TodoList.class';

const todoList = new TodoList();

const buttonAdd = document.querySelector('.projects__add');

const addProyectoModal = document.querySelector('.new-project-box-container');

const addTaskModal = document.querySelector('.new-task-box-container');

const inputTitleProyecto = document.querySelector('.title-input');

const inputDescriptionProyecto = document.querySelector('.description-input');

const btnAddProyecto = document.querySelector('.add-btn');

const btnRemoveProyecto = document.querySelector(
  '.projects__btn-remove-project',
);

const btnCancelProyecto = document.querySelector('.cancel-project-btn');

const btnRemoveTask = document.querySelector('.btn__remove-task');

const btnCancelTask = document.querySelector('.cancel-task-btn');

const divProyectos = document.querySelector('.projects__container-name');

const proyectosDescription = document.querySelector('.project__displayer');

const description = document.querySelector('.description-text');

const containerTareas = document.querySelector('.tasks__container');

const taskInputName = document.querySelector('.task-name-input');

const taskSelectPriority = document.querySelector('.task-priority-select');

const taskInputDate = document.querySelector('.due-date-input');

const btnAddNewTask = document.querySelector('.btn__new-task');

const btnAddTask = document.querySelector('.add-task-btn');

/**
 * Devuelve una NodeList de todos los elementos con el nombre de clase "proyectos"
 * @returns Un NodeList de todos los elementos con la clase de proyectos.
 */
const getAllProyectos = () => document.querySelectorAll('.proyectos');

/**
 * Toma los valores de las entradas, los borra, agrega el nuevo proyecto al objeto todoList, oculta el
 * modal y luego muestra los proyectos.
 */
function addProyecto() {
  const title = inputTitleProyecto.value;
  const descriptionValue = inputDescriptionProyecto.value;
  if (title.length > 0 && description.length > 0) {
    inputTitleProyecto.value = '';
    inputDescriptionProyecto.value = '';
    todoList.addProyecto(title, descriptionValue);
    hideModal();
    mostrarProyectos();
    addEventos();
  } else {
    Swal.fire('Por favor llena los datos correspondientes');
  }
}

/**
 * La función hideModal() se llama cuando el usuario hace clic en el botón de cerrar del modal
 */
function hideModal() {
  addProyectoModal.style.display = 'none';
}

/**
 * La función showModal() se llama cuando el usuario hace clic en el botón con el id
 * "addProyectoButton". Cuando se llama a la función, se muestra el modal con el id "addProyectoModal"
 */
function showModal() {
  addProyectoModal.style.display = 'block';
}
/**
 * Crea un nuevo elemento HTML, le agrega una clase, le agrega el título del proyecto y luego lo agrega
 * al elemento divProyectos
 */
function mostrarProyectos() {
  divProyectos.textContent = '';
  todoList.proyectos.forEach((proyecto) => {
    const newProyecto = document.createElement('h4');
    newProyecto.classList.add('proyectos');
    newProyecto.innerText = proyecto.title;
    divProyectos.append(newProyecto);
  });
}

/**
 * Devuelve el texto del elemento con la clase "activo"
 * @returns El texto interior del elemento con la clase "activo"
 */
function getActivo() {
  return document.querySelector('.activo').innerText;
}

/**
 * Devuelve el proyecto que está actualmente activo
 * @returns the proyectoActivo variable.
 */
function getProyecto() {
  const nameProyecto = getActivo();
  const proyectoActivo = todoList.proyectos.filter(
    (proyecto) => proyecto.title === nameProyecto,
  );
  return proyectoActivo;
}

/**
 * It removes the active class from the previous element, adds the active class to the current element,
 * adds the show class to the description container, gets the current project, shows the description of
 * the current project, and shows the tasks of the current project
 * @param e - The event object
 */
function handleProyectoClick(e) {
  removeActivoClass();
  addActivoClass(e);
  proyectosDescription.classList.add('show');
  const proyecto = getProyecto();
  mostrarDescriptionAlClick(proyecto);
  mostrarTareas();
}

/**
 * Agrega la clase "show" al elemento con el id "proyectosDescription" y luego llama a dos funciones,
 * una para mostrar la descripción del proyecto y la otra para mostrar las tareas.
 * @param _e - El objeto de evento.
 */

function actualizarProyecto() {
  proyectosDescription.classList.add('show');
  const proyecto = getProyecto();
  mostrarDescriptionAlClick(proyecto);
  mostrarTareas();
}

/**
 * Elimina la clase "activo" de todos los divs con la clase "proyecto"
 */
function removeActivoClass() {
  const divsProyectos = getAllProyectos();
  [...divsProyectos].forEach((proyecto) => {
    proyecto.classList.remove('activo');
  });
}

/**
 * Cuando el usuario haga clic en un elemento, agregue la clase 'activo' a ese elemento.
 * @param e - El objeto de evento.
 */
function addActivoClass(e) {
  e.target.classList.add('activo');
}

/**
 * Elimina el proyecto que está actualmente activo
 */
function removerProyecto() {
  const proyectoName = getActivo();
  todoList.removeProyecto(proyectoName);
  mostrarProyectos();
  addEventos();
  mostrarTareas();
}

/**
 * Toma un parámetro llamado proyecto, que es una matriz de objetos, y establece el texto interno del
 * elemento de descripción en la propiedad de descripción del primer objeto de la matriz.
 * @param proyecto - la matriz de objetos que contiene la información del proyecto.
 */
function mostrarDescriptionAlClick(proyecto) {
  description.innerText = proyecto[0].description;
}
/* Agrega un detector de eventos a cada proyecto. */
function addEventos() {
  const Proyectos = getAllProyectos();
  [...Proyectos].forEach((proyecto) => {
    proyecto.addEventListener('click', handleProyectoClick);
  });
}

/* Mostrando las tareas del proyecto actual. */
function mostrarTareas() {
  containerTareas.textContent = '';
  const proyectoActivo = getActivo();
  const proyecto = todoList.proyectos.find((p) => p.title === proyectoActivo);
  const tareas = proyecto.tasks;
  const tareasFiltradas = tareas.filter((tarea) => tarea.priority !== null);
  if (tareasFiltradas.length <= 0) return;

  tareasFiltradas.forEach((tarea) => {
    const tareaH4 = document.createElement('h4');
    const prioridad = tarea.priority;
    tareaH4.classList.add('tarea');
    tareaH4.classList.add(`${prioridad}-tarea`);
    tareaH4.addEventListener('click', seleccionarTarea);
    tareaH4.innerText = tarea.title;
    containerTareas.appendChild(tareaH4);
  });
}

/**
 * Selecciona todas las tareas, elimina la clase "tarea-activo" de todas ellas y luego agrega la clase
 * "tarea-activo" a la tarea en la que se hizo clic.
 * @param e - El objeto de evento.
 */
function seleccionarTarea(e) {
  const tasksAll = document.querySelectorAll('.tarea');
  [...tasksAll].forEach((tarea) => {
    tarea.classList.remove('task-activo');
  });
  e.target.classList.add('task-activo');
}

/* Elimina la tarea que está actualmente activa. */
function removeTarea() {
  const proyectoName = getActivo();
  const proyecto = document.querySelector('.activo');
  const nameTarea = document.querySelector('.task-activo').textContent;
  todoList.removeTask(nameTarea, proyectoName);
  actualizarProyecto(proyecto);
  mostrarTareas();
}

/* Mostrando el modal para agregar una nueva tarea. */
function showModalTask() {
  addTaskModal.style.display = 'block';
}

/* Ocultar el modal para agregar una nueva tarea. */
function ocultarModalTask() {
  addTaskModal.style.display = 'none';
  taskInputName.value = '';
}

/* Agregar una nueva tarea al proyecto actual. */
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

buttonAdd.addEventListener('click', showModal);

btnAddProyecto.addEventListener('click', addProyecto);

btnRemoveProyecto.addEventListener('click', removerProyecto);

btnCancelProyecto.addEventListener('click', hideModal);

btnAddNewTask.addEventListener('click', showModalTask);

btnRemoveTask.addEventListener('click', ocultarModalTask);

btnAddTask.addEventListener('click', addTask);

btnCancelTask.addEventListener('click', ocultarModalTask);

btnRemoveTask.addEventListener('click', removeTarea);

/* Exportando las funciones mostrarProyectos y addEventos para que puedan ser utilizadas en otros
archivos. */
export { mostrarProyectos, addEventos };
