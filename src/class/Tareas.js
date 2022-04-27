class Tareas {
    constructor(title, priority, dueDate) {
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        // this.proyecto = proyectos.find((p) => p.title == proyecto);
        // proyecto.tasks.push(task);
        // updateProyectosLocalStorage();
    }

    // removeTaskFromProyecto(proyectoName, taskName) {
    //     let tareaARemover = taskName;
    //     let proyectoName = proyectoName;
    //     let proyectoEncontrado = proyectos.find(
    //         (p) => p.title === proyectoName
    //     );
    //     let index = proyectos.indexOf(proyectoEncontrado);
    //     let proyectosTareas = proyectos[index].tasks;
    //     let tareaARemoverDelObjeto = proyectosTareas.find((tarea) => {
    //         return tarea.title === tareaARemover;
    //     });

    //     let taskIndex = proyectos[index].task.indexOf(tareaARemoverDelObjeto);

    //     let p = proyectos[index].tasks.filter(
    //         (task) => task.title !== taskName
    //     );

    //     proyectos[index].tasks = p;
    //     updateProyectosLocalStorage();
    // }

    // removeNulls(proyectoName) {
    //     let proyecto = proyectos.find(
    //         (proyecto) => proyecto.title === proyectoName
    //     );
    //     let index = proyectos.indexOf(proyecto);

    //     let p = proyectos[index].tasks.filter((t) => t.title !== null);

    //     proyectos[index].tasks = p;
    //     updateProyectosLocalStorage();
    // }
}

export default Tareas;
