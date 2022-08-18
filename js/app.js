import { validar } from "./validaciones.js";


const textarea = document.querySelector(".msm");
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener('blur', (input) =>{
        validar(input.target)
    });
    
});

textarea.addEventListener('blur', txt =>{
    validar(txt.target);
});


 



