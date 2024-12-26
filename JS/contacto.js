const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const botonSubmit = document.getElementById("enviar");

var numeros = "0123456789";
var letras = "abcdefghijklmnñopqrstuvwxyz";

function tieneNum(campo){
    for (let indice = 0;indice < campo.value.length; indice++){
        if (numeros.indexOf(campo.value.charAt(indice),0)!=-1){
            return true;
         }
         else{
            return false;
         } 
      } 
}

function tieneLetras(campo){
    for (let indice = 0;indice < campo.value.length; indice++){
        if (letras.indexOf(campo.value.charAt(indice),0)!=-1){
            return true;
         }
         else{
            return false;
         }
      }
}

function tieneArroba(campo){
    for (let indice = 0; indice < campo.value.length; indice++){
        if(campo[indice] == "@"){
            return true;
        }
        else{
            return false;
        }
    }
} 

function enviarForm(){
    if (tieneNum(nombre)== true || tieneNum(apellido) == true || tieneLetras(telefono) == true || tieneArroba(correo) == false){
        console.log("No se puede enviar formulario, algun campo es incorrecto");
    }
    else{
        console.log("Formulario enviado")
    }
}

botonSubmit.addEventListener("click",enviarForm);
