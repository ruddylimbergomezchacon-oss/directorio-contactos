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
// Elementos adicionales del DOM
const buscarInput = document.getElementById('buscarInput');
const totalContactos = document.getElementById('totalContactos');

// Función para renderizar la lista de contactos en el HTML
function renderizarContactos() {
  listaContactos.innerHTML = '';

  const textoBusqueda = buscarInput ? buscarInput.value.toLowerCase() : '';
  const contactosFiltrados = contactos.filter(contacto => 
    contacto.nombre.toLowerCase().includes(textoBusqueda)
  );

  if (contactosFiltrados.length === 0) {
    listaContactos.innerHTML = '<li class="mensaje-vacio">No hay contactos guardados.</li>';
  } else {
    contactosFiltrados.forEach(contacto => {
      const li = document.createElement('li');
      li.className = 'contacto-item';
      li.innerHTML = `
        <span><strong>${contacto.nombre}</strong>: ${contacto.telefono}</span>
        <button class="btn-eliminar" onclick="eliminarContacto(${contacto.id})">Eliminar</button>
      `;
      listaContactos.appendChild(li);
    });
  }

  if (totalContactos) {
    totalContactos.textContent = contactos.length;
  }
}
// Evento para búsqueda en tiempo real
if (buscarInput) {
  buscarInput.addEventListener('input', renderizarContactos);
}

// Inicializar la lista al cargar la página
renderizarContactos();

