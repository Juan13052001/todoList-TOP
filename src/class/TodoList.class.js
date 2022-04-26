import Proyecto from "./Proyectos";
import Tareas from "./Tareas";

class TodoList {
    constructor() {
        this.proyectos = [];
    }

    addProyecto(title, description) {
        this.proyectos.push(new Proyecto(title, description));
    }

    removeProyecto(title) {
        this.proyectos = this.proyectos.filter(
            (proyecto) => proyecto.title !== title
        );
    }

    addTask(title, priority, proyectoName) {
        let proyecto = this.proyectos.find(
            (proyecto) => proyecto.title === proyectoName
        );
        proyecto.tasks.push(new Tareas(title, priority));
    }

    removeTask(title, proyectoName) {
        let proyecto = this.proyectos.find(
            (proyecto) => proyecto.title === proyectoName
        );

        proyecto.tasks = proyecto.tasks.filter((p) => p.title !== title);
    }

    guardarLocalStorage() {
        localStorage.setItem("Proyectos", JSON.stringify(this.proyectos));
    }

    cargarLocalStorage() {
        this.proyectos = localStorage.getItem("Proyectos")
            ? JSON.parse(localStorage.getItem("Proyectos"))
            : [];
    }

    // addTask(task) {
    //     this.tasks.push(new Tareas(task));
    // }

    // removeTask(taskTitle) {
    //     this.tasks = this.tasks.filter((tarea) => tarea.title !== taskTitle);
    // }

    // cargarLocalStorage() {
    //     return (proyectos = localStorage.proyectos
    //         ? JSON.parse(localStorage.proyectos)
    //         : []);
    // }
}

const proyecto = new TodoList();
proyecto.addProyecto("Escuela", "Tareas de la escuela");
proyecto.addTask("Aprender JavaScript", "Medium", "Escuela");
proyecto.addTask("Aprender HTML", "Low", "Escuela");
proyecto.addTask("Aprender CSS", "Hight", "Escuela");

proyecto.removeTask("Aprender HTML", "Escuela");

// console.log(proyecto);

export default TodoList;
