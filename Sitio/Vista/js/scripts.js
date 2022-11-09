
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

const nombre = document.getElementById('frnombre')
const email = document.getElementById('frmail')
const usuario = document.getElementById('fruser')
const form = document.getElementById('formulario-registro')

form.addEventListener('submit', (e) =>{
  e.preventDefault() ;                                                //Cancela el formulario antes de enviar asi no se envia con errores
  if (usuario.value.lenght < 4 || usuario.value.lenght > 15 ){
    alert('El nombre de usuario debe tener entre 4 y 15 carácteres');
  }    
});

function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor)){
   alert("La dirección de email " + valor + " es correcta.");
  } else {
   alert("La dirección de email es incorrecta.");
  }
};

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


// function validarNombre(nombre){
//   if (typeof nombre === 'number')