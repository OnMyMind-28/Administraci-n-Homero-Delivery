//JSON

/*************************************************************************************************************** */
//Función para selección de contenido
let nav1 = 1;
let contForm = 2;
let contPrincipal = 3;

function SeleccionarCont(opcion){
    switch (opcion) {
        case nav1:
            document.getElementById('nav-1').style.display = "block";
            document.getElementById('cont-formulario').style.display = "block";
            document.getElementById('cont-1').style.display = "none";
            break;
        case contForm:
            document.getElementById('nav-1').style.display = "block";
            document.getElementById('cont-formulario').style.display = "block";
            document.getElementById('cont-1').style.display = "none";
            break;
        case contPrincipal:
            document.getElementById('nav-1').style.display = "none";
            document.getElementById('cont-formulario').style.display = "none";
            document.getElementById('cont-1').style.display = "block";
        break;
    
        default:
            break;
    }
}
//Función para evitar el recargo por defecto del navegador al enviar formulario
function noRecargo(event){
    event.preventDefault();
}