let palabra = "";
let letras = "";
let palabraEncriptada = "";
let paladraDesencriptada = "";

function encriptar() {
    palabra = document.getElementById('valorUsuario').value;
    // Separar la palabra en un array de letras
    letras = palabra.split('');

    // Iterar sobre el array de letras e imprimir cada una
    for (var i = 0; i < letras.length; i++) {
        //La letra "a" es convertida para "ai"
        if (letras[i] === "a") {
            letras[i] = "ai";
        //La letra "e" es convertida para "enter"
        }else if(letras[i] === "e"){
            letras[i] = "enter";

        //La letra "i" es convertida para "imes"    
        }else if(letras[i] === "i"){
            letras[i] = "imes";
        //La letra "o" es convertida para "ober"    
        }else if(letras[i] === "o"){
            letras[i] = "ober";
        //La letra "u" es convertida para "ufat"     
        }else if(letras[i] === "u"){
            letras[i] = "ufat";    
        }  
    }
    // Convertir el array de letras nuevamente en una cadena
    palabraEncriptada = letras.join('');
    // imprimir el valor de la palabra encriptada en el espacio 
    // de text area con el id de valorResultado
    document.getElementById("valorResultado").value = palabraEncriptada;

}

function desencriptar() {
    // Obtener la frase encriptada introducida por el usuario
    var fraseEncriptada = document.getElementById('valorUsuario').value;
    
    // Realizar un bucle a través de las letras encriptadas
    for (var i = 0; i < fraseEncriptada.length; i++) {
        // Si se encuentra una letra "a" en la posición actual
        if (fraseEncriptada[i] === "a") {
            // Revisar si la siguiente letra es "i"
            if (fraseEncriptada[i + 1] === "i") {
                // Reemplazar "ai" con "a"
                fraseEncriptada = fraseEncriptada.substring(0, i) + "a" + fraseEncriptada.substring(i + 2);
            }
        } else if (fraseEncriptada[i] === "e") {
            if (fraseEncriptada[i + 1] === "n" && fraseEncriptada[i + 2] === "t" && fraseEncriptada[i + 3] === "e" && fraseEncriptada[i + 4] === "r") {
                fraseEncriptada = fraseEncriptada.substring(0, i) + "e" + fraseEncriptada.substring(i + 5);
            }
        } else if (fraseEncriptada[i] === "i") {
            if (fraseEncriptada[i + 1] === "m" && fraseEncriptada[i + 2] === "e" && fraseEncriptada[i + 3] === "s") {
                fraseEncriptada = fraseEncriptada.substring(0, i) + "i" + fraseEncriptada.substring(i + 4);
            }
        } else if (fraseEncriptada[i] === "o") {
            if (fraseEncriptada[i + 1] === "b" && fraseEncriptada[i + 2] === "e" && fraseEncriptada[i + 3] === "r") {
                fraseEncriptada = fraseEncriptada.substring(0, i) + "o" + fraseEncriptada.substring(i + 4);
            }
        } else if (fraseEncriptada[i] === "u") {
            if (fraseEncriptada[i + 1] === "f" && fraseEncriptada[i + 2] === "a" && fraseEncriptada[i + 3] === "t") {
                fraseEncriptada = fraseEncriptada.substring(0, i) + "u" + fraseEncriptada.substring(i + 4);
            }
        }
    }
    
    // Imprimir la frase desencriptada en el espacio de text area con el ID de valorResultado
    document.getElementById("valorResultado").value = fraseEncriptada;
}


function validarMinusculas(event) {
    var input = event.target;
    var valor = input.value;
    // Verificar si hay letras mayúsculas o caracteres especiales
    if (/[A-Z]|[^a-z]/.test(valor)) {
        alert("Por favor, ingresa solo letras minúsculas y sin caracteres especiales.");
        // Quitar letras mayúsculas y caracteres especiales del valor ingresado
        input.value = valor.replace(/[^a-z]/g, '').toLowerCase();
    }
}

document.getElementById('valorUsuario').addEventListener('input', validarMinusculas);

function copiarTexto() {
    // Seleccionar el elemento <textarea>
    var elementoTextArea = document.getElementById("valorResultado");
    // Seleccionar el texto dentro del <textarea>
    elementoTextArea.select();
    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");
    // Alerta al usuario de que el texto se ha copiado
    alert("Texto copiado al portapapeles: " + elementoTextArea.value);
}



  




 


