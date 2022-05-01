/* La función constructora es una función especial que se llama cuando se crea un nuevo objeto. */
class Proyecto {
  /**
   * La función constructora es una función especial que se llama cuando se crea un nuevo objeto.
   * @param title - El título del proyecto.
   * @param description - Una cadena que describe el proyecto.
   */
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.tasks = [];
  }
}

export default Proyecto;
