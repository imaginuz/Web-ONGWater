const formInputs = {
    "dinero": null,
    "numerotar": null,
    "nombre": null,
    "apellido": null,
    "email": null,
    "direccion": null,
    "ciudad": null,
    "submit": null,
    "codigopostal": null,
    "numerotel": null,
    "chkInfo": null,
};



document.addEventListener("DOMContentLoaded", ()=>{
    initPageLoad();
});

function initPageLoad(){
    formInputs.dinero = document.getElementById("dinero");
    formInputs.numerotar = document.getElementById("numerotar");
    formInputs.nombre = document.getElementById("nombre");
    formInputs.apellido = document.getElementById("apellido");
    formInputs.email = document.getElementById("email");
    formInputs.direccion = document.getElementById("direccion");
    formInputs.ciudad = document.getElementById("ciudad");
    formInputs.submit = document.getElementById("submit");
    formInputs.codigopostal = document.getElementById("codigopostal");
    formInputs.numerotel = document.getElementById("numerotel");
    formInputs.chkInfo = document.getElementById("chkInfo");
    console.log("Formulario Cargado", formInputs);
    document.getElementById("formulario").addEventListener("submit", (e)=>{
        const [errors, isValid] = validateForm();
        if(!isValid) {
            alert("Formulario no Valido");
            console.log("Form Errors", errors);
            e.preventDefault();
            e.stopPropagation();
        }
    });
}

function validateForm(){
    let errors = [];

    if(isEmpty(formInputs.nombre.value)){
        errors.push("El campo nombre no puede estar vacio");
    }
    if(!isEmail(formInputs.email.value)){
        errors.push("El campo email no es valido");
    }
    if(!isPhone(formInputs.telefono.value)){
        errors.push("El campo telefono no es valido");
    }

    return [ errors, errors.length == 0];
}
// Validadores
function isEmpty(value){
    // if(value == null || value == "") {
    //     return true;
    // }
    // return false;
    return /^\s*$/.test(value);
}

function isEmail(value){
    return /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value);
}

function isPhone(value) {
    return /^\+?\(?(504)?\)?\s?[23789]\d{3}-?\s?\d{4}$/.test(value);
}