document.addEventListener('DOMContentLoaded', function () {
  const footerElement = document.querySelector('.footer-container');
  if (!footerElement) return;

  fetch('/views/components/footer.html')
    // La respuesta la convierte a texto plano
    .then((response) => response.text())
    // Inserta el contenido html del navbar en el contenedor correspondiente.
    .then((data) => {
      footerElement.innerHTML = data;
    })
    .catch((error) => console.error('Error cargando footer', error));
});