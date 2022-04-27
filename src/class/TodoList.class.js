import Proyecto from "./Proyectos";
import Tareas from "./Tareas";

class TodoList {
    constructor() {
        this.cargarLocalStorage();
    }

    addProyecto(title, description) {
        this.proyectos.push(new Proyecto(title, description));
        this.guardarLocalStorage();
    }

    removeProyecto(title) {
        this.proyectos = this.proyectos.filter(
            (proyecto) => proyecto.title !== title
        );
    }

    addTask(title, priority, dueDate, proyectoName) {
        let proyecto = this.proyectos.find(
            (proyecto) => proyecto.title === proyectoName
        );
        proyecto.tasks.push(new Tareas(title, priority, dueDate));
        this.guardarLocalStorage();
    }

    removeTask(title, proyectoName) {
        let proyecto = this.proyectos.find(
            (proyecto) => proyecto.title === proyectoName
        );

        proyecto.tasks = proyecto.tasks.filter((p) => p.title !== title);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem("Proyectos", JSON.stringify(this.proyectos));
    }

    cargarLocalStorage() {
        this.proyectos = localStorage.getItem("Proyectos")
            ? JSON.parse(localStorage.getItem("Proyectos"))
            : [];
    }
}
export default TodoList;
