

export const validar = (input) => {
    var validador = true;
    const typeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-invalid");
        input.parentElement.querySelector(".message-error").innerHTML = "";      
        var validador = true; 
    }
    else {
        input.parentElement.classList.add("input-invalid");
        input.parentElement.querySelector(".message-error").innerHTML = mostrarMensajesError(typeInput, input);
        input.style.margin="0";
        var validador = false;
        
    }
    return validador
}

const tiposdeError = [
    "valueMissing",
    "typeMismatch",
];
const mensajesDeError = {
    nombre: {
        valueMissing: "El campo de nombre no debe quedar vacío"
    },
    email: {
        valueMissing: "El campo de correo no debe estar vacío",
        typeMismatch: "Debe ser un formato de correo electornico"
    },
    asunto: {
        valueMissing: "El campo de asunto no debe estar vacío"
    },
    mensaje: {
        valueMissing: "Envía un mensaje"
    }
}

const mostrarMensajesError = (typeInput, input) =>{
    let mensaje ="";
    tiposdeError.forEach(error =>{
        if(input.validity[error]){
            mensaje= mensajesDeError[typeInput][error];
        }
    });
     return mensaje;
}