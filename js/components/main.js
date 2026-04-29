
document.addEventListener('DOMContentLoaded', function () {
  const mainElement = document.querySelector('.main-container');
  if (!mainElement) return;

  fetch('/views/components/main.html')
    // La respuesta la convierte a texto plano
    .then((response) => response.text())
    // Inserta el contenido html del navbar en el contenedor correspondiente.
    .then((data) => {
      mainElement.innerHTML = data;
    })
    .catch((error) => console.error('Error cargando main', error));
});