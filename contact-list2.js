let contactos = [];

function crearContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
  // Crear un objeto con la información del contacto
  const nuevoContacto = {
    id: 1,
    nombres: "Carlos",
    apellidos: "Ramos",
    telefono: "95678433",
    ciudad: "Tegucigalpa",
    direccion: "3 de mayo",
  };
  contactos.push(nuevoContacto);
}

// Función para eliminar un contacto por su ID
function eliminarContacto(id) {
  const indice = contactos.findIndex((contacto) => contacto.id === id);

  // Verificar si encontramos el contacto
  if (indice !== -1) {
    contactos.splice(indice, 1);
    console.log("Contacto eliminado correctamente.");
  } else {
    console.log("No se encontró el contacto con el ID especificado.");
  }
}

function imprimirContactos() {
  // Verificar si existen contactos en el arreglo
  if (contactos.length === 0) {
    console.log("No hay contactos almacenados.");
  } else {
    console.log("Lista de contactos:");

    contactos.forEach((contacto) => {
      console.log("ID:", contacto.id);
      console.log("Nombres:", contacto.nombres);
      console.log("Apellidos:", contacto.apellidos);
      console.log("Teléfono:", contacto.telefono);
      console.log("Ciudad:", contacto.ciudad);
      console.log("Dirección:", contacto.direccion);
    });
  }
}
