// Lista de contactos con datos predefinidos
let contactos = ["Saudy Vargas", "María Gómez", "Carlos Maradiaga"];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombre) {
  contactos.push(nombre);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombre) {
  let indice = contactos.indexOf(nombre);
  if (indice !== -1) {
    contactos.splice(indice, 1);
  }
}

// Función para imprimir los contactos en la consola
function imprimirContactos() {
  contactos.forEach(function (contacto) {
    console.log(contacto);
  });
}

console.log("Contactos antes de añadir:");
imprimirContactos();

agregarContacto("Kevin Vargas");
console.log("Nuevo Contacto");
imprimirContactos();

borrarContacto("Kevin Vargas");
imprimirContactos();
