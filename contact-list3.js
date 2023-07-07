let contactList = [
  {
    id: 1,
    nombre: "Sara",
    apellido: "Pineda",
    telefono: "97681423",
    ciudad: "Tegucigalpa",
    direccion: "Torocagua",
  },
  {
    id: 2,
    nombre: "Carlos",
    apellido: "Vega",
    telefono: "32024563",
    ciudad: "San Pedro Sula",
    direccion: "Calle 32",
  },
  {
    id: 3,
    nombre: "John",
    apellido: "Walker",
    telefono: "32045567",
    ciudad: "San Pedro Sula",
    direccion: "Calle 45",
  },
];

function agregarContacto(contacto) {
  contactList.push(contacto);
  console.log("Contacto agregado:", contacto);
}

function eliminarContacto(id) {
  let indice = -1;
  for (let i = 0; i < contactList.length; i++) {
    if (contactList[i].id === id) {
      indice = i;
      break;
    }
  }
  if (indice !== -1){
  let contactoBorrado = contactList.splice(indice, 1);
  console.log("Contacto eliminado:"
  contactoBorrado[0].nombre, 
  contactoBorrado[0].apellido);
  
} else {
    console.log("El contacto no existe en la lista");
  }
}

function imprimirContactos(){
    console.log("Lista de Contactos:");
    for (let contacto of contactList){
        console.log("ID:", id);
        console.log("Nombre:", contacto.nombre, contacto.apellido);
        console.log("Telefono:", contacto.telefono);
        console.log("Ciudad:", contacto.ciudad);
        console.log("Direccion:", contacto.direccion);
    }
}

function actualizarContacto(id, nuevaInformacion){
    for (let i = 0; i < contactList.length; i++){
        if (contactList[i].id === id){
            contactList[i].nombre =
            nuevaInformacion.nombre || contactList[i].nombre;
            contactList[i].apellido =
            nuevaInformacion.apellido || contactList[i].apellido;
            contactList[i].telefono =
            nuevaInformacion.telefono || contactList[i].telefono;
            contactList[i].ciudad =
            nuevaInformacion.ciudad || contactList[i].ciudad;
            contactList[i].direccion =
            nuevaInformacion.direccion || contactList[i].direccion;
            console.log("Contacto Actualizado:",contactList[i])
            return;
        }
    }
    console.log("El contacto no existe en la lista.");
}


