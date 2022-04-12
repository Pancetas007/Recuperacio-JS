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

function validarDireccion() {
    var direccion = document.getElementById("direccion");
    if (!direccion.checkValidity()) {
        if (direccion.validity.valueMissing) {
            error2(direccion, "Introdueix una direcció.");
        }
        if (direccion.validity.patternMismatch) {
            error2(direccion, "La direcció introduida NO és correcta!");
        }
        return false;
    }
    return true;
}

function validarCP() {
    var cp = document.getElementById("cp");
    if (!cp.checkValidity()) {
        if (cp.validity.valueMissing) {
            error2(cp, "Introdueix un codic postal.");
        }
        if (cp.validity.patternMismatch) {
            error2(cp, "El codic postal introduit NO és correcte!");
        }
        return false;
    }
    return true;
}

function validarPoblacion() {
    var poblacion = document.getElementById("poblacion");
    if (!poblacion.checkValidity()) {
        if (poblacion.validity.valueMissing) {
            error2(poblacion, "Introdueix una població.");
        }
        if (poblacion.validity.patternMismatch) {
            error2(poblacion, "La població introduida NO és correcta!");
        }
        return false;
    }
    return true;
}

function validarCorreu() {
    var correu = document.getElementById("email");
    if (!correu.checkValidity()) {
        if (correu.validity.valueMissing) {
            error2(correu, "Introdueix un email.");
        }
        if (correu.validity.patternMismatch) {
            error2(correu, "El email introduit NO és correcte!");
        }
        return false;
    }
    return true;
}

function validarTlf() {
    var tlf = document.getElementById("telefono");
    if (!tlf.checkValidity()) {
        if (tlf.validity.valueMissing) {
            error2(tlf, "Introdueix un telèfon.");
        }
        if (tlf.validity.patternMismatch) {
            error2(tlf, "El tèlefon introduit NO és correcte!");
        }
        return false;
    }
    return true;
}

function validarData() {
    debugger;
    let date = new Date();
    let output = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
    console.log(output);

    var data = document.getElementById("fechaNacimiento");
    console.log(data.value);

    var dataValue = data.value;

    var arrayData = dataValue.split("-");
    console.log(arrayData);

    if (!data.checkValidity()) {
        if (data.validity.valueMissing) {
            error2(data, "Introdueix una data.");
        }
        if (data.validity.patternMismatch) {
            error2(data, "La data introduida NO és correcta!");
        }
        if (dataValue[0] > date.getFullYear()) {
            console.log("error");
        }
        return false;
    }
    return true;
}

function validar(e) {
    e.preventDefault();
    if (validarNom() && validarApellidos() && validarEmpresa() && validarDocumento() && validarDireccion() && validarCP() && validarPoblacion() && validarCorreu() && validarTlf() && validarData()) {
        return true;
    } else {
        return false;
    }
}

function error2(element, missatge) {
    document.getElementById("error").innerHTML = missatge;
    console.log(element);
}

function validarPAS() {
    var expresioPAS = new RegExp(/^[a-zA-Z]{5,20}$/);

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
    var resto = numeros % 23;

    var lletres = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

    lletres = lletres.join("");

    var dniCorrecte = lletres.charAt(resto);

    if (lletraDni == dniCorrecte) {
        return true;
    } else {
        error2(dni, "El DNI introduït NO és correcte!");
        return false;
    }
}