

const btnEnviar = document.querySelector(".btn-enviar");
const email = document.querySelector('.email');
const nombre = document.querySelector('.nombre');
const asunto = document.querySelector('.asunto');
const mensaje = document.querySelector('.msm');


var boolean;


btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    const elements = [email.value, nombre.value, asunto.value, mensaje.value]
        if(
            email.value == "" ||
            nombre.value == "" ||
            asunto.value == "" ||
            mensaje.value == "" 
        ){
            boolean = false
        } else{
            boolean = true
        }
    if(boolean){
        window.location.href = `mailto:anibalqcastro14@gmail.com?subject=${asunto.value}&body=Nombre%3A%20${nombre.value}%0ACorreo%3A%20${email.value}%0AMensaje%3A%20${mensaje.value}`;
    }else{
        alert("Completa el formulario");
    }
});






//Otra forma de enviar correo
//const form = document.querySelector(".formulario");
// const sendEmail = document.querySelector(".sendEmail");


// function handleEmail(event) {
//     event.preventDefault();
//     const fd = new FormData(this);

//     sendEmail.setAttribute(
//         'href',
//         `mailTo:anibalqcastro14@gmail.com?from=${fd.get('email')}&subject=${fd.get('asunto') + ", " + "enviado por: "+ fd.get('name')}&body=mensaje: ${fd.get('mensaje')}`
//     )
//     sendEmail.click()
// }

// form.addEventListener('submit', handleEmail);
