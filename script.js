// Botón de cambio de tema
const themeButton = document.getElementById('themeButton');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Funcionalidad del formulario (solo muestra una alerta)
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que recargue la página
  alert('¡Formulario enviado correctamente!');
});
