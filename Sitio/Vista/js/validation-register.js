// Definimos algunas variables para comenzar a trabajar
var myInput = document.getElementById("frpass");
var myInputRepeat = document.getElementById("frpass2");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var equal = document.getElementById("equal");
var botono = document.getElementById("registerSubmit");

// Cuando hacemos foco mostramos el bloque de indicaciones de como debe ser el password, cuando le sacamos el foco ocultamos dicho bloque
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}
myInputRepeat.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

myInputRepeat.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// La funcion se dispara cuando comenzamos a escribir en el campo de password
myInput.onkeyup = function() {
    checkForm()
};
myInputRepeat.onkeyup = function() {
    checkForm()
};

function checkForm() {
    let lower = false;
    let upper = false;
    let numero = false;
    let ocho = false;
    let igual = false;

    // Chequeamos las minusculas
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid", "text-danger");
        letter.classList.add("valid", "text-success");
        lower = true;
    } else {
        letter.classList.remove("valid", "text-success");
        letter.classList.add("invalid", "text-danger");
        lower = false;
    }

    // Chequeamos las mayusculas
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid", "text-danger");
        capital.classList.add("valid", "text-success");
        upper = true;
    } else {
        capital.classList.remove("valid", "text-success");
        capital.classList.add("invalid", "text-danger");
        upper = false;
    }

    // Chequeamos si hay numeros
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
        number.classList.remove("invalid", "text-danger");
        number.classList.add("valid", "text-success");
        numero = true;
    } else {
        number.classList.remove("valid", "text-success");
        number.classList.add("invalid", "text-danger");
        numero = false;
    }

    // Chequeamos si tiene mas de 8 caracteres
    if(myInput.value.length >= 8) {
        length.classList.remove("invalid", "text-danger");
        length.classList.add("valid", "text-success");
        ocho = true;
    } else {
        length.classList.remove("valid", "text-success");
        length.classList.add("invalid", "text-danger");
        ocho = false;
    }

    // Chequeamos si los dos passwords son iguales
    if(myInput.value == myInputRepeat.value) {   
        equal.classList.remove("invalid", "text-danger");
        equal.classList.add("valid", "text-success");
        igual = true;
    } else {
        equal.classList.remove("valid", "text-success");
        equal.classList.add("invalid", "text-danger");
        igual = false; 
    }  
    
    // Si todas las validaciones dan true habilitamos el boton para el registro del usuario
    if (lower && upper && numero && ocho && igual) {
        botono.disabled = false;
    } else {
        botono.disabled = true;
    }
};

