window.onload = main;

function main() {
    document.getElementById("enviar").addEventListener("click", validar);
    esborrarError();
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
    var data = document.getElementById("fechaNacimiento");
    let dataActual = new Date();
    var dataNaiximent = new Date(data.value);
    let dataAnys= new Date (dataActual - dataNaiximent);
    let anys = dataAnys.getFullYear() - 1970;
   
    if (!data.checkValidity()) {
        if (data.validity.valueMissing) {
            error2(data, "Introdueix una data.");
        }
        if (data.validity.patternMismatch) {
            error2(data, "La data introduida NO és correcta!");
        }
        return false;
    }else{
        if (anys  < 16) {
            error2(data, "No tens la edad mínima establerta")
            return false;
        }
    }
    return true;
}

function validarGenero() {
    var radio = document.getElementsByClassName("form-check-input");
    if(document.getElementById("generoMujer").checked){
        return true;
    }else if (document.getElementById("generoHombre").checked){
        return true;
    }else if(document.getElementById("generoOtro").checked){
        return true;
    }else if(document.getElementById("generoSingenero").checked){
        return true;
    }else{
        error2(radio, "Seleccione alguna opció");
        return false;
    }
}

function validarContra() {
    var contra = document.getElementById("contrasenya");
    var repContra = document.getElementById("contrasenya2");
    if (!contra.checkValidity()) {
        if (contra.validity.valueMissing) {
            error2(contra, "Introdueix la contrasenya.");
        }
        if (contra.validity.patternMismatch) {
            error2(contra, "La contrasenya introduida NO és correcta!");
        }
        return false;
    }
    if (!repContra.checkValidity()) {
        if (repContra.validity.valueMissing) {
            error2(repContra, "Introdueix la segona contrasenya.");
        }
        if (repContra.validity.patternMismatch) {
            error2(repContra, "La segona contrasenya introduida NO és correcta!");
        }
        return false;
    }
    if (repContra.value != contra.value) {
        error2(repContra, "Les contrasenyes introduides NO coincideixen!");
    }
    return true;
}

function validarCaptcha() {
    var check = document.getElementById("confirmar");
    if (check.checked) {
        return true;
    }else{
        error2(check, "Has de acceptar aquest camp");
        return false;
    }
}

function validar(e) {
    e.preventDefault();
    esborrarError();
    if (validarNom() && validarApellidos() && validarEmpresa() && validarDocumento() && validarDireccion() && validarCP() && validarPoblacion() && validarCorreu() && validarTlf() && validarData() && validarGenero() && validarContra() && validarCaptcha()) {
        return true;
    } else {
        return false;
    }
}

function error2(element, missatge) {
    var div = document.getElementById("error");
    div.style.display="block";

    var h5 = document.createElement("h5");
    h5.className = "card-title ml-5";
    h5.textContent = "Errores encontrados en el formulario"

    var div2 = document.createElement("div");
    div2.className = "card-body ml-3"

    var li = document.createElement("li");
    var ul = document.createElement("ul");

    li.appendChild(ul);
    div2.appendChild(li);
    div.appendChild(h5);
    div.appendChild(div2);

    li.textContent = missatge;
    element.className="form-control border-danger";
    element.focus();
}

function esborrarError() {
    var formulari = document.forms[0];

    var errors = document.getElementById("error");
    errors.style.display="none";

    while (errors.firstChild) {
        errors.removeChild(errors.firstChild);
    }

    for(var i = 0; i < formulari.elements.length-2; i++) {
        if (formulari.elements[i].type=="radio"){
        formulari.elements[i].className="form-check-input";
        }else{
        formulari.elements[i].className="form-control";
        }
    }
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