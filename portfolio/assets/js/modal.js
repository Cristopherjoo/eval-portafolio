$(document).ready(function () {
  $(".col-left, .col-right, .full-width").click(function () {

    // Cambiar contenido del modal por opcion especifica
    let title = $(this).find("h3").text();
    let description = $(this).find("p").text();

    $("#modalProyectoLabel").text(title);
    // $("#modalProyecto .modal-body").html("<p>" + description + "</p>");
    $("#modalProyecto .modal-body").html(`<p> ${description} <p>`)

    // Mostrar el modal
    $("#modalProyecto").modal('show');
  });
  
});

