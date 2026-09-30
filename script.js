// Selección de elementos del DOM
const nombreInput = document.getElementById('nombreInput');
const telefonoInput = document.getElementById('telefonoInput');
const btnAgregar = document.getElementById('btnAgregar');
const listaContactos = document.getElementById('listaContactos');

let contactos = [];

// Función para agregar un contacto
function agregarContacto() {
  const nombre = nombreInput.value.trim();
  const telefono = telefonoInput.value.trim();

  if (nombre === '' || telefono === '') {
    alert('Por favor, ingresa tanto el nombre como el teléfono.');
    return;
  }

  const nuevoContacto = {
    id: Date.now(),
    nombre: nombre,
    telefono: telefono
  };

  contactos.push(nuevoContacto);

  nombreInput.value = '';
  telefonoInput.value = '';

  renderizarContactos();
}

btnAgregar.addEventListener('click', agregarContacto);
// Función para eliminar un contacto por ID
function eliminarContacto(id) {
  contactos = contactos.filter(contacto => contacto.id !== id);
  renderizarContactos();
}
