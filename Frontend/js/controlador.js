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
    <div class="container-fluid nav-2P">
    <a class="navbar-brand icon-nav" href="#">
    <span><i class="fa-regular fa-message fa-2x me-3"></i></span>
    <span><i class="fa-sharp fa-solid fa-border-all fa-2x me-3"></i></span>
    <span ><i class="fa-solid fa-right-from-bracket fa-2x me-3"></i></span>
    </a>
  </div>
  
    <div class="menu-lateral">
    <img class="img-user" src="img/usuarios/1.user.png" alt="">
    <h6 class="name-user">Romeo Jimenez</h6>
    <hr class="hr-user" >
    <div class="container-fluid">
              <div class="">
                  <div class="menu">
                  <ul>
                  <li class="submenu">
                      <a href="#"><span class="fa-solid fa-shop"></span>Empresas<span class="fa-solid fa-caret-down"></span></a>
                      <ul class="hijo">
                          <li><a href="#">Agregar <span class=""></span></a></li>
                          <li><a href="#">Editar <span class=""></span></a></li>
                          <li><a href="#">Eliminar <span class=""></span></a></li>
                      </ul>
                  </li>
                    <hr>
                  <li class="submenu">
                      <a href="#"><span class="fa-solid fa-burger"></span>Productos<span class="fa-solid fa-caret-down"></span></a>
                      <ul class="hijo">
                          <li><a href="#">Agregar <span class=""></span></a></li>
                          <li><a href="#">Editar <span class=""></span></a></li>
                          <li><a href="#">Eliminar <span class=""></span></a></li>
                      </ul>
                  </li>
                  <hr>
                  <li class="submenu">
                      <a href="#"><span class="fa-solid fa-motorcycle"></span>Motoristas<span class="fa-solid fa-caret-down"></span></a>
                      <ul class="hijo">
                          <li><a href="#">Agregar <span class=""></span></a></li>
                          <li><a href="#">Editar <span class=""></span></a></li>
                          <li><a href="#">Eliminar <span class=""></span></a></li>
                      </ul>
                  </li>
                  <hr>
                  <li class="submenu">
                      <a href="#"><span class="fa-solid fa-user-group"></span>Clientes<span class="fa-solid fa-caret-down"></span></a>
                      <ul class="hijo">
                          <li><a href="#">Ver clientes<span class=""></span></a></li>
                         
                      </ul>
                  </li>
                  <hr>
                  <li class="submenu">
                      <a href="#"><span class="fa-solid fa-laptop-code"></span>Administradores<span class="fa-solid fa-caret-down"></span></a>
                      <ul class="hijo">
                          <li><a href="#">Agregar <span class=""></span></a></li>
                          <li><a href="#">Editar <span class=""></span></a></li>
                          <li><a href="#">Eliminar <span class=""></span></a></li>
                      </ul>
                  </li>
              </ul>
                    
                  </div>
                </div>
                
                
          </div>
      </div>
      <img class="img-right-log" src="img/Logo/1.logo.png" alt="">
    
    `
}generaMenuLateral()
/********************************************************************************************************************** */
//Función de herramientas de empresas
function toolsEmp() {
    document.getElementById ('sunM-1').innerHTML += `
    <div class="dropdown subEmpresa" >
    <option value="rigatoni">Rigatoni</option>
  <option value="dave">Dave</option>
  <option value="pumpernickel">Pumpernickel</option>
  <option value="reeses">Reeses</option>
</div>`
}

/******************************************************************************************************************** */
//FUNCIONES PARA OPCIONES DE SUBMENÚ EMPRESAS
//Función Agregar
function AgregarEmpresa () {
    
}
function EditarEmpresa () {
    
}
function EliminarEmpresa () {
    
}
//FUNCIONES PARA OPCIONES DE SUBMENÚ PRODUCTOS
//Función Agregar
function AgregarProductos () {
    
}
function EditarProductos () {
    
}
function EliminarProductos () {
    
}
//FUNCIONES PARA OPCIONES DE SUBMENÚ MOTORISTAS
//Función Agregar
function AgregarMotoristas () {
    
}
function EditarMotoristas () {
    
}
function EliminarMotoristas () {
    
}
//FUNCIONES PARA OPCIONES DE SUBMENÚ CLIENTES
//Función que genera el listado de clientes
function VerClientes () {
    
}
//FUNCIONES PARA OPCIONES DE SUBMENÚ ADMINISTRADORES
//Función Agregar
function AgregarAdministrador() {
    
}
function EditarAdministrador() {
    
}
function EliminarAdministrador() {
    
}
/********************************************************************************************************************* */
