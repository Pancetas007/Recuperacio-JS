window.onload = main;

function main() {
    document.getElementById("enviar").addEventListener("click", validar);
}

function validarNom() {
    var nom = document.getElementById("nombre");
    if (!nom.checkValidity()) {
        if (nom.validity.valueMissing) {
            error2(nom, "Introdueix un nom.");
        }
        if (nom.validity.patternMismatch) {
            error2(nom, "El nom introduit NO és correcte!");
        }
        return false;
    }
    return true;
}

function validarApellidos() {
    var apellido = document.getElementById("apellidos");
    if (!apellido.checkValidity()) {
        if (apellido.validity.valueMissing) {
            error2(apellido, "Introdueix un apellido.");
        }
        if (apellido.validity.patternMismatch) {
            error2(apellido, "El apellido introduit NO és correcte!");
        }
        return false;
    }
    return true;
}

function validarEmpresa() {
    var empresa = document.getElementById("empresa");
    if (!empresa.checkValidity()) {
        if (empresa.validity.patternMismatch) {
            error2(empresa, "L'empresa introduïda NO és correcta!");
        }
        return false;
    }
    return true;
}

function validarDocumento() {
    var select = document.getElementById("tipoDoc").value;

    if (select == 1) {
        validarDNI();
    } else if (select == 2) {
        validarNIE();
    } else if (select == 3) {
        validarPAS();
    } else {
        return false;
    }
    return true;
}

function validar(e) {
    debugger;
    e.preventDefault();
    if (validarNom() && validarApellidos() && validarEmpresa() && validarDocumento()) {
        return true;
    } else {
        return false;
    }
}

function error2(element, missatge) {
    var li = document.getElementsByTagName("li")[0];
    document.getElementById("error").innerHTML = missatge;
    console.log(element);
}

function validarPAS() {
    var expresioPAS = new RegExp(/^[a-zA-Z1-0 ]{1,60}$/);

    var pas = document.getElementById("documento").value;

    if (expresioPAS.test(pas)) {
        return true;
    } else {
        error2(pas, "El Passaport introduït NO és correcte!");
        return false;
    }
}

function validarNIE() {
    var expresioNIE = new RegExp(/((([X-Z])|([LM])){1}([-]?)((\d){7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]))/);

    var nie = document.getElementById("documento").value;

    if (expresioNIE.test(nie)) {
        return true;
    } else {
        error2(nie, "El NIE introduït NO és correcte!");
        return false;
    }
}

function validarDNI() {
    var expresioDNI = new RegExp(/^\d{8}[A-Z]{1}$/);

    var dni = document.getElementById("documento").value;
    console.log(dni)

    if (expresioDNI.test(dni)) {
        if (validarLletraDNI() == false) {
            return false;
        } else {
            return true;
        }
    } else {
        error2(dni, "El DNI introduït NO és correcte!");
        return false;
    }
}

function validarLletraDNI() {
    var dni = document.getElementById("documento").value;
    var numeros = dni.substring(0, dni.length - 1);
    var lletraDni = dni.charAt(8);
    console.log(lletraDni);
    var resto = numeros % 23;

    var lletres = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

    lletres = lletres.join("");

    var dniCorrecte = lletres.charAt(resto);
    console.log(dniCorrecte);

    if (lletraDni == dniCorrecte) {
        return true;
    } else {
        error2(dni, "El DNI introduït NO és correcte!");
        return false;
    }
}