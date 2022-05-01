import Proyecto from './Proyectos';
import Tareas from './Tareas';

/* La clase TodoList tiene un constructor que carga los proyectos desde localStorage y tiene métodos
para agregar y eliminar proyectos y tareas, y para guardar los proyectos en localStorage. */
class TodoList {
  /**
   * La función constructora se llama cuando se instancia la clase.
   */
  constructor() {
    this.cargarLocalStorage();
  }

  /**
   * Agrega un nuevo proyecto a la matriz de proyectos.
   * @param title - El título del proyecto
   * @param description - cuerda
   */
  addProyecto(title, description) {
    this.proyectos.push(new Proyecto(title, description));
    this.guardarLocalStorage();
  }

  /**
   * La función toma un título como argumento, luego filtra la matriz de proyectos, devolviendo una
   * nueva matriz con todos los proyectos excepto el que tiene el título que coincide con el
   * argumento.
   * @param title - El título del proyecto que se va a eliminar.
   */
  removeProyecto(title) {
    this.proyectos = this.proyectos.filter(
      (proyecto) => proyecto.title !== title,
    );
  }

  /**
   * Toma un título, prioridad, fecha de vencimiento y nombre del proyecto, y luego encuentra el
   * proyecto con el mismo título que el nombre del proyecto, y luego inserta una nueva tarea en la
   * matriz de tareas del proyecto.
   * @param title - El título de la tarea.
   * @param priority - 1-5
   * @param dueDate - La fecha de vencimiento de la tarea.
   * @param proyectoName - El nombre del proyecto al que se agregará la tarea.
   */
  addTask(title, priority, dueDate, proyectoName) {
    const proyecto = this.proyectos.find((p) => p.title === proyectoName);
    proyecto.tasks.push(new Tareas(title, priority, dueDate));
    this.guardarLocalStorage();
  }

  /**
   * Toma el título de la tarea y el nombre del proyecto como parámetros, luego encuentra el proyecto
   * en la matriz de proyectos, luego filtra las tareas de ese proyecto y devuelve las que no
   * coinciden con el título de la tarea.
   * @param title - El título de la tarea que se va a eliminar.
   * @param proyectoName - El nombre del proyecto que contiene la tarea que se va a eliminar.
   */
  removeTask(title, proyectoName) {
    const proyecto = this.proyectos.find((proj) => proj.title === proyectoName);

    proyecto.tasks = proyecto.tasks.filter((p) => p.title !== title);
    this.guardarLocalStorage();
  }

  /**
   * La función guardarLocalStorage() toma la matriz proyectos y la convierte en una cadena usando
   * JSON.stringify() y luego la guarda en localStorage usando localStorage.setItem()
   */
  guardarLocalStorage() {
    localStorage.setItem('Proyectos', JSON.stringify(this.proyectos));
  }

  /**
   * Si hay un valor en localStorage, analícelo y asígnelo a la matriz de proyectos; de lo contrario,
   * asigne una matriz vacía a la matriz de proyectos.
   */
  cargarLocalStorage() {
    this.proyectos = localStorage.getItem('Proyectos')
      ? JSON.parse(localStorage.getItem('Proyectos'))
      : [];
  }
}
export default TodoList;
