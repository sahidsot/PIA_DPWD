function mostrarFormulario(tipo) {
  // Mostrar el modal de reserva
  document.getElementById('modalReserva').style.display = 'block';
  document.getElementById('mensajeReserva').innerText = `¡Estás a punto de reservar una habitación ${tipo}.`;
  
  // Limpiar los campos del formulario cada vez que se abre el modal
  document.getElementById('userName').value = '';
  document.getElementById('userEmail').value = '';
}

function cerrarModal() {
  document.getElementById('modalReserva').style.display = 'none';
}

document.getElementById('formReserva').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let nombre = document.getElementById('userName').value;
  let correo = document.getElementById('userEmail').value;

  alert(`¡Gracias, ${nombre}! Tu reserva ha sido confirmada. Un correo de confirmación ha sido enviado a ${correo}.`);
  cerrarModal();
});
