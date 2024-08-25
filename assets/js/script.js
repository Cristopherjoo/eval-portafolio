function cerrarVentana() {   
  window.close();
}

function abrirVentana() { 
  let width = 800;
  let height = 700;

  let x = (screen.width - width) / 2;
  let y = (screen.height - height) / 2;
  
  let ventanaNueva = window.open(
      'modal.html', 
      'ventanaSecundaria', 
      `width=${width},height=${height},left=${x},top=${y}`
  );
}