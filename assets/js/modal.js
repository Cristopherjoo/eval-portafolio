$(document).ready(function () {
  $(".col-left, .col-right, .full-width").click(function () {
    let proyecto = {
      img: $(this).find("img").attr("src") || null,
      nombre: $(this).find("h3").text(),
      descripcion: $(this).find("p").text(),
    };

    let modalContent = `
      <h5>${proyecto.nombre}</h5>
      <p>${proyecto.descripcion}</p>`;

    if (proyecto.img) {
      modalContent += `<img src="${proyecto.img}" alt="${proyecto.nombre}" class="img-fluid mt-3 ms-auto">`;
    }

    $("#modalProyecto .modal-body").html(modalContent);

    $("#modalProyecto").modal("show");
  });
});
