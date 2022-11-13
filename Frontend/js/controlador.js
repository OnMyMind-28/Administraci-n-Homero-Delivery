//JSON
var usuarios = [{
    id:1,
    nombre: "Ruth",
    apellido: "Jimnenez",
    mail: "ruthjimenez95@gmail.com",
    username: "RJ0717",
    password: "1717",
    urlImagen: "img/usuarios/1.user.png"
},
{
    id:2,
    nombre: "Talia",
    apellido: "Salvador",
    mail: "taliasalvador97@gmail.com",
    username: "TS1028",
    password: "2828",
    urlImagen: "img/usuarios/1.user.png"
}];
//Local Storage Usuarios
var localStorageusuarios = window.localStorage;


if(localStorageusuarios.getItem('usuarios')==null){
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
} else {
    usuarios = JSON.parse(localStorageusuarios.getItem('usuarios'))
}

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
/***************************************************************************************************************** */
/*¡¡¡¡EN LA IMG DE USUARIOS DEBE SER LLAMADA DESDE LOS JSONS!!!!!*/
function generaMenuLateral(){
    let user = usuarios;
    
    document.getElementById ('cont-1').innerHTML += `
    <div class="menu-lateral">
    <img class="img-user" src="img/usuarios/1.user.png" alt="">
    <h6 class="name-user">Romeo Jimenez</h6>
    <hr class="hr-user" >
    <div class="container-fluid">
              <div class="">
                  
                  </button>
                  <div class="menu">
                    <a class="dropdown-item" href="#"><i class="fa-solid fa-bell icon"></i>Empresas       <i id="sunM-1" class="fa-solid fa-caret-down "  style=" margin-left:255px ;" onclick="toolsEmp()"></i></a>
                    <hr class="hr-menu" >
                    <a class="dropdown-item" href="#"><i class="fa-solid fa-user-group icon"></i>Productos      <i class="fa-solid fa-caret-down"style=" margin-left:245px ;"></i></a>
                    <hr class="hr-menu" >
                    <a class="dropdown-item" href="#"><i class="fa-solid fa-question icon"></i>Motoristas     <i class="fa-solid fa-caret-down"style=" margin-left:252px ;"></i></a>
                    <hr class="hr-menu" >
                    <a class="dropdown-item" href="#"><i class="fa-solid fa-gear icon"></i>Clientes       <i class="fa-solid fa-caret-down"style=" margin-left:265px ;"></i></a>
                    <hr class="hr-menu" >
                    <a class="dropdown-item" href="index.html"><i class="fa-solid fa-arrow-right-from-bracket icon"></i>Administradores<i class="fa-solid fa-caret-down"style=" margin-left:208px ;"></i></a>
                    
                  </div>
                </div>
                
                
          </div>
      </div>
    
    `
}generaMenuLateral()
/********************************************************************************************************************** */
//Función de herramientas de empresas
function toolsEmp() {
    document.getElementById ('sunM-1').innerHTML += `
    <div class="dropdown">

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`
}