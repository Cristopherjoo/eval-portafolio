function cerrarVentana() {   
  window.close();
}

function abrirVentana() {
  // Definir el tamaño de la nueva ventana
  let width = 800;
  let height = 700;

  // Calcular la posición para centrar la ventana en ambos ejes
  let x = (screen.width - width) / 2;
  let y = (screen.height - height) / 2;

  // Abrir la nueva ventana
  let ventanaNueva = window.open(
      'modal.html', 
      'ventanaSecundaria', 
      `width=${width},height=${height},left=${x},top=${y}`
  );

  // Detectar si la ventana se cierra
  let intervalo = setInterval(function() {
      if (ventanaNueva.closed) {
          clearInterval(intervalo);           
          console.log('La ventana modal se ha cerrado.');
      }
  }, 1000);
}
