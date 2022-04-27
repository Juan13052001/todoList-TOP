/* La clase Tareas es un modelo para crear objetos que tienen un título, prioridad y fecha de
vencimiento. */
class Tareas {
    /**
     * La función constructora es una función especial que se utiliza para crear nuevos objetos.
     * @param title - El título de la tarea.
     * @param priority - Un número del 1 al 5, siendo 1 la prioridad más alta.
     * @param dueDate - La fecha de vencimiento de la tarea.
     */
    constructor(title, priority, dueDate) {
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}

export default Tareas;
