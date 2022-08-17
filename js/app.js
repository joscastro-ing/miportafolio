import { validar } from "./validaciones.js";

export var validador = true;
export var validador2 = true;

const textarea = document.querySelector(".msm");

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    if(!(input.value == "")){
        validador = true
    }
    else{
        validador = false
    }
    input.addEventListener('blur', (input) =>{
        validar(input.target)
        if(validar(input.target)){
            validador = true
        } else{
            validador = false
        }
    });
    
});
if(!(textarea.value == "")){
    validador = true
}
else{
    validador = false
}
textarea.addEventListener('blur', txt =>{
    validar(txt.target);
    if(validar(txt.target)){
        validador2 = true
    } else{
        validador2 = false
    }
});


    // btnEnviar.addEventListener('click', (event) =>{
    //     event.preventDefault();
    //     if(validador){
    //         window.location.href=`mailto:anibalqcastro14@gmail.com?subject=${asunto.value}&body=Nombre%3A%20${nombre.value}%0ACorreo%3A%20${email.value}%0AMensaje%3A%20${mensaje.value}`;
    //     }
    //     else{
    //         alert("Completa el formulario");
    //     }
 
    // });



