
// Menu desplegable

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
const $navbar_icon = $(".navbar-toggler");
const $menu= $("#navbarSupportedContent");

$navbar_icon.click( function() {
    $menu.toggleClass(showClass);
})

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdownMenu.removeClass(showClass);
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdownMenu.addClass(showClass);
  }
});

function validateForm() {
  let ctnombre = document.forms["ctform"]["ctnombre"].value;
  let ctapellido = document.forms["ctform"]["ctapellido"].value;
  let ctmail = document.forms["ctform"]["ctmail"].value;
  let ctmensaje = document.forms["ctform"]["ctmensaje"].value;
  let mensaje = "";
  if (ctnombre == "") {
    mensaje += "Debe completar el campo de nombre.";
  }
  if (ctapellido == "") {
    mensaje += "\nDebe completar el campo de Apellido.";
  }
  if (ctmail == "") {
    mensaje += "\nDebe completar el campo de mail para que podamos comunicarnos con usted.";
  }
  if (ctmensaje == "") {
    mensaje += "\nDebe completar el campo de mensaje para tener conocimiento de sus dudas u opiniones.";
  }
  if (mensaje !== "") {
    alert(mensaje);
    return false;
  }
}


