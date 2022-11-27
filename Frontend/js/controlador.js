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
                          <li onclick= "AgregarEmpresa (),ContenidoEmpresa (1)"><a href="#">Agregar <span class=""></span></a></li>
                          <li onclick= "EditarEmpresa (),ContenidoEmpresa (2)"><a href="#">Editar <span class=""></span></a></li>
                          <li onclick= "EliminarEmpresa (),ContenidoEmpresa (3)"><a href="#">Eliminar <span class=""></span></a></li>
                      </ul>
                  </li>
                    <hr>
                  <li class="submenu">
                      <a href="#"><span class="fa-solid fa-burger"></span>Productos<span class="fa-solid fa-caret-down"></span></a>
                      <ul class="hijo">
                          <li onclick="AgregarProductos (),ContenidoProducto (1) "><a href="#">Agregar <span class=""></span></a></li>
                          <li onclick="EditarProductos (),ContenidoProducto (2) "><a href="#">Editar <span class=""></span></a></li>
                          <li onclick="EliminarProductos (),ContenidoProducto (3) "><a href="#">Eliminar <span class=""></span></a></li>
                      </ul>
                  </li>
                  <hr>
                  <li class="submenu">
                      <a href="#"><span class="fa-solid fa-motorcycle"></span>Motoristas<span class="fa-solid fa-caret-down"></span></a>
                      <ul class="hijo">
                          <li onclick="AgregarMotoristas (),ContenidoMotorista(1)"><a href="#">Agregar <span class=""></span></a></li>
                          <li onclick="EditarMotoristas (),ContenidoMotorista(2)"><a href="#">Editar <span class=""></span></a></li>
                          <li onclick="EliminarMotoristas (),ContenidoMotorista(3)"><a href="#">Eliminar <span class=""></span></a></li>
                      </ul>
                  </li>
                  <hr>
                  <li class="submenu">
                      <a href="#"><span class="fa-solid fa-user-group"></span>Clientes<span class="fa-solid fa-caret-down"></span></a>
                      <ul class="hijo">
                          <li  onclick="VerClientes () ,ContenidoCliente(1)"><a href="#">Ver clientes<span class=""></span></a></li>
                         
                      </ul>
                  </li>
                  <hr>
                  <li class="submenu">
                      <a href="#"><span class="fa-solid fa-laptop-code"></span>Administradores<span class="fa-solid fa-caret-down"></span></a>
                      <ul class="hijo">
                          <li onclick="AgregarAdministrador(), ContenidoAdmin(1)"><a href="#">Agregar <span class=""></span></a></li>
                          <li onclick="EditarAdministrador(), ContenidoAdmin(2)"><a href="#">Editar <span class=""></span></a></li>
                          <li onclick="EliminarAdministrador(),ContenidoAdmin(3) "><a href="#">Eliminar <span class=""></span></a></li>
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

/******************************************************************************************************************** */
//FUNCIONES PARA OPCIONES DE SUBMENÚ EMPRESAS
//Función Agregar
function AgregarEmpresa () {
    document.getElementById ('sub-emp-agregar').innerHTML += `
    <div class="div-Emp-1">
    <div class="div-form">
    <div class="form-floating mt-5">
      <input type="email" class="form-control input-1" id="floatingInputGrid" placeholder="ID" value="id">
      <label style="margin-left: 10px;" for="floatingInputGrid">ID</label>
    </div>
    <div class="form-floating mt-2">
      <input type="email" class="form-control input-3" id="floatingInputGrid" placeholder="nombre empresa" value="nombre">
      <label style="margin-left: 10px;" for="floatingInputGrid">Nombre de la empresa</label>
    </div>
    <div class="row g-2 mt-2">
  <div class="col-md">
    <div class="form-floating input-4">
      <input type="email" class="form-control" id="floatingInputGrid" placeholder="RTN" value="RTN">
      <label class="" for="floatingInputGrid">RTN</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating input-4">
      <select class="form-select" id="floatingSelectGrid">
        <option selected>Imagen</option>
        <option value="1">img-1</option>
        <option value="2">img-2</option>
        <option value="3">img3</option>
      </select>
      <label for="floatingSelectGrid">Selecionar imagen</label>
    </div>
  </div>
</div>
    <div class="row g-2 mt-2" >
    
  <div class="col-md">
  
    <div class="form-floating input-1">
      <input type="email" class="form-control " id="floatingInputGrid" placeholder="nombre" value="nombre">
      <label for="floatingInputGrid">Contacto comercial</label>

      <input type="email" class="form-control input-2" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com">
      <label class="" style="margin-top:65px;" for="floatingInputGrid">E-mail</label>
    </div>
  </div>
  
  <div class="col-md">
    <div class="form-floating input-1">
    <input type="email" class="form-control " id="floatingInputGrid" placeholder="numero" value="Tel">
    <label for="floatingInputGrid">Telefono</label>
      
    </div>
  </div>
</div>
<div class="btn-form-div">

<button class="btn-Form                      agregar" onclick="">Agregar</button>
<button class="btn-Form                 agregar" onclick="">Cancelar</button>
<div>
    </div>
    `
}
function EditarEmpresa () {
    document.getElementById ('sub-emp-editar').innerHTML += `
    <div class="div-Emp-1">
    <div class="div-form">
    <div class="form-floating mt-3">
      <input type="email" class="form-control input-3" id="floatingInputGrid" placeholder="nombre empresa" value="busqueda">
      <label style="margin-left: 10px;" for="floatingInputGrid">Buscar empresa</label>
    </div>
    <div class="form-floating mt-2">
      <input type="email" class="form-control input-1" id="floatingInputGrid" placeholder="ID" value="id">
      <label style="margin-left: 10px;" for="floatingInputGrid">ID</label>
    </div>
    <div class="form-floating mt-2">
      <input type="email" class="form-control input-3" id="floatingInputGrid" placeholder="nombre empresa" value="nombre">
      <label style="margin-left: 10px;" for="floatingInputGrid">Nombre de la empresa</label>
    </div>
    <div class="row g-2 mt-1">
  <div class="col-md">
    <div class="form-floating input-4">
      <input type="email" class="form-control" id="floatingInputGrid" placeholder="RTN" value="RTN">
      <label class="" for="floatingInputGrid">RTN</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating input-4">
      <select class="form-select" id="floatingSelectGrid">
        <option selected>Imagen</option>
        <option value="1">img-1</option>
        <option value="2">img-2</option>
        <option value="3">img3</option>
      </select>
      <label for="floatingSelectGrid">Selecionar imagen</label>
    </div>
  </div>
</div>
    <div class="row g-2 mt-2" >
    
  <div class="col-md">
  
    <div class="form-floating input-1">
      <input type="email" class="form-control " id="floatingInputGrid" placeholder="nombre" value="nombre">
      <label for="floatingInputGrid">Contacto comercial</label>

      <input type="email" class="form-control input-2" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com">
      <label class="" style="margin-top:65px;" for="floatingInputGrid">E-mail</label>
    </div>
  </div>
  
  <div class="col-md">
    <div class="form-floating input-1">
    <input type="email" class="form-control " id="floatingInputGrid" placeholder="numero" value="Tel">
    <label for="floatingInputGrid">Telefono</label>
      
    </div>
  </div>
</div>
<div class="btn-form-div">

<button class="btn-Form " onclick="">Actualizar</button>
<button class="btn-Form " onclick="">Cancelar</button>
<div>
    </div>
    `
}
function EliminarEmpresa () {
    document.getElementById ('sub-emp-eliminar').innerHTML += `
    <div class="div-Emp-1">
    <div class="div-form">
    <div class="form-floating mt-5">
      <input type="email" class="form-control input-3" id="floatingInputGrid" placeholder="nombre empresa" value="busqueda">
      <label style="margin-left: 10px;" for="floatingInputGrid">Buscar empresa</label>
    </div>
    <div class="form-floating mt-2">
      <input type="email" class="form-control input-1" id="floatingInputGrid" placeholder="ID" value="id">
      <label style="margin-left: 10px;" for="floatingInputGrid">ID</label>
    </div>
    <div class="form-floating mt-2">
      <input type="email" class="form-control input-3" id="floatingInputGrid" placeholder="nombre empresa" value="nombre">
      <label style="margin-left: 10px;" for="floatingInputGrid">Nombre de la empresa</label>
    </div>
    <div class="row g-2 mt-1">
  <div class="col-md">
    <div class="form-floating input-4">
      <input type="email" class="form-control" id="floatingInputGrid" placeholder="RTN" value="RTN">
      <label class="" for="floatingInputGrid">RTN</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating input-4">
      <select class="form-select" id="floatingSelectGrid">
        <option selected>Imagen</option>
        <option value="1">img-1</option>
        <option value="2">img-2</option>
        <option value="3">img3</option>
      </select>
      <label for="floatingSelectGrid">Selecionar imagen</label>
    </div>
  </div>
</div>
    <div class="row g-2 mt-2" >
    
  
  
  
</div>
<div class="btn-form-div">

<button class="btn-Form " onclick="">Eliminar</button>
<button class="btn-Form " onclick="">Cancelar</button>
<div>
    </div>
    `
}
//FUNCIONES PARA OPCIONES DE SUBMENÚ PRODUCTOS
//Función Agregar
function AgregarProductos () {
    document.getElementById ('sub-prod-agregar').innerHTML += `
    <div class="div-Emp-1">
    Prueba1Producto
    </div>
    `
}
function EditarProductos () {
    document.getElementById ('sub-prod-editar').innerHTML += `
    <div class="div-Emp-1">
    Prueba2Producto
    </div>
    `
}
function EliminarProductos () {
    document.getElementById ('sub-prod-eliminar').innerHTML += `
    <div class="div-Emp-1">
    Prueba3Producto
    </div>
    `
}
//FUNCIONES PARA OPCIONES DE SUBMENÚ MOTORISTAS
//Función Agregar
function AgregarMotoristas () {
    document.getElementById ('sub-moto-agregar').innerHTML += `
    <div class="div-Emp-1">
    Prueba1Motorista
    </div>
    `
}
function EditarMotoristas () {
    document.getElementById ('sub-moto-editar').innerHTML += `
    <div class="div-Emp-1">
    Prueba2Motorista
    </div>
    `
}
function EliminarMotoristas () {
    document.getElementById ('sub-moto-eliminar').innerHTML += `
    <div class="div-Emp-1">
    Prueba3Motorista
    </div>
    `
}
//FUNCIONES PARA OPCIONES DE SUBMENÚ CLIENTES
//Función que genera el listado de clientes
function VerClientes () {
    document.getElementById ('sub-ver-cliente').innerHTML += `
    <div class="div-Emp-1">
    Prueba1Clientes
    </div>
    `
}
//FUNCIONES PARA OPCIONES DE SUBMENÚ ADMINISTRADORES
//Función Agregar
function AgregarAdministrador() {
    document.getElementById ('sub-admin-agregar').innerHTML += `
    <div class="div-Emp-1">
    Prueba1Admin
    </div>
    `
}
function EditarAdministrador() {
    document.getElementById ('sub-admin-editar').innerHTML += `
    <div class="div-Emp-1">
    Prueba2Admin
    </div>
    `
}
function EliminarAdministrador() {
    document.getElementById ('sub-admin-eliminar').innerHTML += `
    <div class="div-Emp-1">
    Prueba3Admin
    </div>
    `
}
/******************************************************************************************** */
//ALL CONTENIDO DE SUBMENÚ EMPRESAS
let subEmpAgregar = 1;
let subEmpEditar= 2;
let subEmpEliminar = 3;
function ContenidoEmpresa (opcion){
    switch (opcion) {
        case subEmpAgregar:
            document.getElementById('all-empresas-cont').style.display = "block";
            document.getElementById('all-admin-cont').style.display = "none";
            document.getElementById('all-cliente-cont').style.display = "none";
            document.getElementById('all-productos-cont').style.display = "none";
            document.getElementById('all-moto-cont').style.display = "none";
            document.getElementById('sub-emp-agregar').style.display = "block";
            document.getElementById('sub-emp-editar').style.display = "none";
            document.getElementById('sub-emp-eliminar').style.display = "none";
            break;
        case subEmpEditar:
            document.getElementById('all-empresas-cont').style.display = "block";
            document.getElementById('all-admin-cont').style.display = "none";
            document.getElementById('all-cliente-cont').style.display = "none";
            document.getElementById('all-productos-cont').style.display = "none";
            document.getElementById('all-moto-cont').style.display = "none";
            document.getElementById('sub-emp-agregar').style.display = "none";
            document.getElementById('sub-emp-editar').style.display = "block";
            document.getElementById('sub-emp-eliminar').style.display = "none";
            break;
        case subEmpEliminar:
            document.getElementById('all-empresas-cont').style.display = "block";
            document.getElementById('all-admin-cont').style.display = "none";
            document.getElementById('all-cliente-cont').style.display = "none";
            document.getElementById('all-productos-cont').style.display = "none";
            document.getElementById('all-moto-cont').style.display = "none";
            document.getElementById('sub-emp-agregar').style.display = "none";
            document.getElementById('sub-emp-editar').style.display = "none";
            document.getElementById('sub-emp-eliminar').style.display = "block";
        break;
    
        default:
            break;
    }
}
//ALL CONTENIDO DE SUBMENÚ PRODUCTOS

let subProdAgregar =1;
let subProdEditar= 2;
let subProdEliminar = 3;
function ContenidoProducto (opcion){
    switch (opcion) {
        case subProdAgregar:
            document.getElementById('all-productos-cont').style.display = "block";
            document.getElementById('all-admin-cont').style.display = "none";
            document.getElementById('all-cliente-cont').style.display = "none";
            document.getElementById('all-moto-cont').style.display = "none";
            document.getElementById('all-empresas-cont').style.display = "none";
            document.getElementById('sub-prod-agregar').style.display = "block";
            document.getElementById('sub-prod-editar').style.display = "none";
            document.getElementById('sub-prod-eliminar').style.display = "none";
            break;
        case subProdEditar:
            document.getElementById('all-productos-cont').style.display = "block";
            document.getElementById('all-admin-cont').style.display = "none";
            document.getElementById('all-cliente-cont').style.display = "none";
            document.getElementById('all-moto-cont').style.display = "none";
            document.getElementById('all-empresas-cont').style.display = "none";
            document.getElementById('sub-prod-agregar').style.display = "none";
            document.getElementById('sub-prod-editar').style.display = "block";
            document.getElementById('sub-prod-eliminar').style.display = "none";
            break;
        case subProdEliminar:
            document.getElementById('all-productos-cont').style.display = "block";
            document.getElementById('all-admin-cont').style.display = "none";
            document.getElementById('all-cliente-cont').style.display = "none";
            document.getElementById('all-moto-cont').style.display = "none";
            document.getElementById('all-empresas-cont').style.display = "none";
            document.getElementById('sub-prod-agregar').style.display = "none";
            document.getElementById('sub-prod-editar').style.display = "none";
            document.getElementById('sub-prod-eliminar').style.display = "block";
        break;
    
        default:
            break;
    }
}
//ALL CONTENIDO DE SUBMENÚ MOTORISTAS

let subMotoAgregar = 1;
let subMotoEditar= 2;
let subMotoEliminar = 3;
function ContenidoMotorista (opcion){
    switch (opcion) {
        case subMotoAgregar:
            document.getElementById('all-moto-cont').style.display = "block";
            document.getElementById('all-admin-cont').style.display = "none";
            document.getElementById('all-cliente-cont').style.display = "none";
            document.getElementById('all-productos-cont').style.display = "none";
            document.getElementById('all-empresas-cont').style.display = "none";
            document.getElementById('sub-moto-agregar').style.display = "block";
            document.getElementById('sub-moto-editar').style.display = "none";
            document.getElementById('sub-moto-eliminar').style.display = "none";
            break;
        case subMotoEditar:
            document.getElementById('all-moto-cont').style.display = "block";
            document.getElementById('all-admin-cont').style.display = "none";
            document.getElementById('all-cliente-cont').style.display = "none";
            document.getElementById('all-productos-cont').style.display = "none";
            document.getElementById('all-empresas-cont').style.display = "none";
            document.getElementById('sub-moto-agregar').style.display = "none";
            document.getElementById('sub-moto-editar').style.display = "block";
            document.getElementById('sub-moto-eliminar').style.display = "none";
            break;
        case subMotoEliminar:
            document.getElementById('all-moto-cont').style.display = "block";
            document.getElementById('all-admin-cont').style.display = "none";
            document.getElementById('all-cliente-cont').style.display = "none";
            document.getElementById('all-productos-cont').style.display = "none";
            document.getElementById('all-empresas-cont').style.display = "none";
            document.getElementById('sub-moto-agregar').style.display = "none";
            document.getElementById('sub-moto-editar').style.display = "none";
            document.getElementById('sub-moto-eliminar').style.display = "block";
        break;
    
        default:
            break;
    }
}
//ALL CONTENIDO DE SUBMENÚ CLIENTE
let subVerCliente = 1;
function ContenidoCliente(opcion){
    switch (opcion) {
        case subAdminAgregar:
            document.getElementById('all-cliente-cont').style.display = "block";
            document.getElementById('all-admin-cont').style.display = "none";
            document.getElementById('all-productos-cont').style.display = "none";
            document.getElementById('all-moto-cont').style.display = "none";
            document.getElementById('all-empresas-cont').style.display = "none";
            document.getElementById('sub-ver-cliente').style.display = "block";
          
            break;
       
    
        default:
            break;
    }
}
//ALL CONTENIDO DE SUBMENÚ ADMINISTRADORES
let subAdminAgregar = 1;
let subAdminEditar = 2;
let subAdminEliminar = 3;

function ContenidoAdmin(opcion){
    switch (opcion) {
        case subAdminAgregar:
            document.getElementById('all-admin-cont').style.display = "block";
            document.getElementById('all-cliente-cont').style.display = "none";
            document.getElementById('all-productos-cont').style.display = "none";
            document.getElementById('all-moto-cont').style.display = "none";
            document.getElementById('all-empresas-cont').style.display = "none";
            document.getElementById('sub-admin-agregar').style.display = "block";
            document.getElementById('sub-admin-editar').style.display = "none";
            document.getElementById('sub-admin-eliminar').style.display = "none";
            break;
        case subAdminEditar:
            document.getElementById('all-admin-cont').style.display = "block";
            document.getElementById('all-cliente-cont').style.display = "none";
            document.getElementById('all-productos-cont').style.display = "none";
            document.getElementById('all-moto-cont').style.display = "none";
            document.getElementById('all-empresas-cont').style.display = "none";
            document.getElementById('sub-admin-agregar').style.display = "none";
            document.getElementById('sub-admin-editar').style.display = "block";
            document.getElementById('sub-admin-eliminar').style.display = "none";
            break;
        case subAdminEliminar:
            document.getElementById('all-admin-cont').style.display = "block";
            document.getElementById('all-cliente-cont').style.display = "none";
            document.getElementById('all-productos-cont').style.display = "none";
            document.getElementById('all-moto-cont').style.display = "none";
            document.getElementById('all-empresas-cont').style.display = "none";
            document.getElementById('sub-admin-agregar').style.display = "none";
            document.getElementById('sub-admin-editar').style.display = "none";
            document.getElementById('sub-admin-eliminar').style.display = "block";
        break;
    
        default:
            break;
    }
}
/********************************************************************************************************************* */

function generarEmpresa() { 
    document.getElementById('empresa').innerHTML = ''; 
    empresas.forEach(function (emp) { 
        document.getElementById('empresa').innerHTML += `
    
            `;
    }) 
} 