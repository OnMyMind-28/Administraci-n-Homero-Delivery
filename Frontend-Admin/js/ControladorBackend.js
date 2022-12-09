/*************************************ADMINISTRADORES******************************************************************************** */
let getAdministradores;
let getAdministrador;
let postAdmin;
let putAdmin;
let deleteAdmin;
//url la rutas de nuestro RestAPI
//****OBTENER ADMINISTRADORES TODOS*****************************************************************
const obtenerAdministradores = async ()=>{
  const endpoint = 'http://localhost:3000/administradores/';
   const result = await fetch (endpoint, 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    getAdministradores= await result.json();
   // console.log('Motoristas', resultJSON);
};
obtenerAdministradores();
//****OBTENER ADMINISTRADOR UNO*********************************************************************
const obtenerAdministrador = async (id) =>{//Función para obtener solo un usuario
  const endpoint = 'http://localhost:3000/administradores/';
    const result = await fetch (endpoint + id,//result almacena el resultado, +id es para concatenar
        {
        method: 'GET',
        
        headers: {
            'Content-Type': 'application/json'
        }
    });
    getAdministrador = await result.json();
    //console.log('Motorista: ', resultJSON);
}
obtenerAdministrador('6382bd062df5e1ec1c531882');
//****GUARDAR MOTORISTA (crear motorista)**********************************************************
const guardarAdministrador = async (usuario) =>{//Para guardar o crear es POST
  const endpoint = 'http://localhost:3000/administradores/';
    const result = await fetch (endpoint,
        {
            method: 'POST',
        
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario) //Es lo que recibiria el backend para guardarlo en Mongodb
            //Para que sea valido nuestro JSON hay que parsearlo con *JSON.stringify*
        });
        postAdmin = await result.json();
        //console.log('Motorista guardado: ', resultJSON);
};

//****ACTUALIZAR MOTORISTA ***********************************************************************
const actualizarAdministrador = async (usuario, id) =>{//Para actualizar es PUT
  const endpoint = 'http://localhost:3000/administradores/';
    const result = await fetch (endpoint + id,
        {
            method: 'PUT',
        
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario) //Es lo que recibiria el backend para guardarlo en Mongodb
            //Para que sea valido nuestro JSON hay que parsearlo con *JSON.stringify*
        });
        putAdmin = await result.json();
       // console.log('Motorista actualizado: ', resultJSON);
};


//****ELIMINAR MOTORISTA*************************************************************************
const eliminarAdministrador = async (id) =>{//Para eliminar es DELETE
  const endpoint = 'http://localhost:3000/administradores/';
    const result = await fetch (endpoint + id,
        {
            method: 'DELETE',
        
            headers: {
                'Content-Type': 'application/json'
            },
           
        });
        deleteAdmin = await result.json();
       console.log('Motorista eliminado: ', resultJSON);
};






/***********************************************MOTORISTAS******************************************************************** */
let getMotoristas;
let getMotorista;
let postMotorista;
let putMotorista;
let deleteMotorista;
//url la rutas de nuestro RestAPI
//****OBTENER MOTORISTAS TODOS*****************************************************************
const obtenerMotoristas = async ()=>{
  const endpoint = 'http://localhost:3000/motoristas/';
   const result = await fetch (endpoint, 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    getMotoristas= await result.json();
   // console.log('Motorista', resultJSON);
};
obtenerMotoristas();
//****OBTENER MOTORISTA UNO*********************************************************************
const obtenerMotorista = async (id) =>{//Función para obtener solo un usuario
  const endpoint = 'http://localhost:3000/motoristas/';
    const result = await fetch (endpoint + id,//result almacena el resultado, +id es para concatenar
        {
        method: 'GET',
        
        headers: {
            'Content-Type': 'application/json'
        }
    });
    getMotorista = await result.json();
    //console.log('Motorista: ', resultJSON);
}

//****GUARDAR MOTORISTA (crear motorista)**********************************************************
const guardarMotorista = async (usuario) =>{//Para guardar o crear es POST
  const endpoint = 'http://localhost:3000/motoristas/';
    const result = await fetch (endpoint,
        {
            method: 'POST',
        
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario) //Es lo que recibiria el backend para guardarlo en Mongodb
            //Para que sea valido nuestro JSON hay que parsearlo con *JSON.stringify*
        });
        postMotorista = await result.json();
        //console.log('Motorista guardado: ', resultJSON);
};

//****ACTUALIZAR MOTORISTA ***********************************************************************
const actualizarMotorista = async (usuario, id) =>{//Para actualizar es PUT
  const endpoint = 'http://localhost:3000/motoristas/';
    const result = await fetch (endpoint + id,
        {
            method: 'PUT',
        
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario) //Es lo que recibiria el backend para guardarlo en Mongodb
            //Para que sea valido nuestro JSON hay que parsearlo con *JSON.stringify*
        });
        putMotorista = await result.json();
       // console.log('Motorista actualizado: ', resultJSON);
};


//****ELIMINAR MOTORISTA*************************************************************************
const eliminarMotorista = async (id) =>{//Para eliminar es DELETE
  const endpoint = 'http://localhost:3000/motoristas/';
    const result = await fetch (endpoint + id,
        {
            method: 'DELETE',
        
            headers: {
                'Content-Type': 'application/json'
            },
           
        });
        deleteMotorista = await result.json();
       console.log('Motorista eliminado: ', resultJSON);
};
//eliminarMotorista('6382bd062df5e1ec1c531892');







/**************************************EMPRESAS***************************************************************************** */
let getEmpresas;
let getEmpresa;
let postEmpresa;
let putEmpresa;
let deleteEmpresa;
//url la rutas de nuestro RestAPI
//****OBTENER EMPRESAS TODOS*****************************************************************
const obtenerEmpresas = async ()=>{
  const endpoint = 'http://localhost:3000/empresas/';
   const result = await fetch (endpoint, 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    getEmpresas= await result.json();
   // console.log('Empresa', resultJSON);
};
obtenerEmpresas();
//****OBTENER EMPRESA UNO*********************************************************************
const obtenerEmpresa = async (id) =>{//Función para obtener solo un usuario
  const endpoint = 'http://localhost:3000/empresas/';
    const result = await fetch (endpoint + id,//result almacena el resultado, +id es para concatenar
        {
        method: 'GET',
        
        headers: {
            'Content-Type': 'application/json'
        }
    });
    getEmpresa = await result.json();
    //console.log('Empresa: ', resultJSON);
}

//****GUARDAR EMPRESA (crear Empresa)**********************************************************
const guardarEmpresa = async (usuario) =>{//Para guardar o crear es POST
  const endpoint = 'http://localhost:3000/empresas/';
    const result = await fetch (endpoint,
        {
            method: 'POST',
        
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario) //Es lo que recibiria el backend para guardarlo en Mongodb
            //Para que sea valido nuestro JSON hay que parsearlo con *JSON.stringify*
        });
        postEmpresa = await result.json();
        //console.log('Empresa guardado: ', resultJSON);
};

//****ACTUALIZAR EMPRESA ***********************************************************************
const actualizarEmpresa = async (usuario, id) =>{//Para actualizar es PUT
  const endpoint = 'http://localhost:3000/empresas/';
    const result = await fetch (endpoint + id,
        {
            method: 'PUT',
        
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario) //Es lo que recibiria el backend para guardarlo en Mongodb
            //Para que sea valido nuestro JSON hay que parsearlo con *JSON.stringify*
        });
        putEmpresa = await result.json();
       // console.log('Empresa actualizado: ', resultJSON);
};


//****ELIMINAR EMPRESA*************************************************************************
const eliminarEmpresa = async (id) =>{//Para eliminar es DELETE
  const endpoint = 'http://localhost:3000/empresas/';
    const result = await fetch (endpoint + id,
        {
            method: 'DELETE',
        
            headers: {
                'Content-Type': 'application/json'
            },
           
        });
        deleteEmpresa = await result.json();
       console.log('Empresa eliminado: ', resultJSON);
};
//eliminarEmpresa('6382bd062df5e1ec1c531892');






/******************************************USUARIOS (CLIENTES)*********************************************************** */
let getUsuarios;
let getUsuario;
let postUsuario;
let putUsuario;
let deleteUsuario;
const endpoint = 'http://localhost:3005/usuarios/';//url la rutas de nuestro RestAPI
//****OBTENER USUARIOS TODOS*****************************************************************
const obtenerUsuarios = async ()=>{
   const result = await fetch (endpoint, 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    getUsuarios= await result.json();
   // console.log('Usuarios', resultJSON);
};
obtenerUsuarios();
//****OBTENER USUARIO UNO*********************************************************************
const obtenerUsuario = async (id) =>{//Función para obtener solo un usuario
    const result = await fetch (endpoint + id,//result almacena el resultado, +id es para concatenar
        {
        method: 'GET',
        
        headers: {
            'Content-Type': 'application/json'
        }
    });
    getUsuario = await result.json();
    //console.log('Usuario: ', resultJSON);
}
obtenerUsuario('6382bd062df5e1ec1c531882');
//****GUARDAR USUARIO (crear usuario)**********************************************************
const guardarUsuario = async (usuario) =>{//Para guardar o crear es POST
    const result = await fetch (endpoint,
        {
            method: 'POST',
        
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario) //Es lo que recibiria el backend para guardarlo en Mongodb
            //Para que sea valido nuestro JSON hay que parsearlo con *JSON.stringify*
        });
        postUsuario = await result.json();
        //console.log('Usuario guardado: ', resultJSON);
};

//****ACTUALIZAR USUARIO ***********************************************************************
const actualizarUsuario = async (usuario, id) =>{//Para actualizar es PUT
    const result = await fetch (endpoint + id,
        {
            method: 'PUT',
        
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario) //Es lo que recibiria el backend para guardarlo en Mongodb
            //Para que sea valido nuestro JSON hay que parsearlo con *JSON.stringify*
        });
        putUsuario = await result.json();
       // console.log('Usuario actualizado: ', resultJSON);
};


//****ELIMINAR USUARIO*************************************************************************
const eliminarUsuario = async (id) =>{//Para eliminar es DELETE
    const result = await fetch (endpoint + id,
        {
            method: 'DELETE',
        
            headers: {
                'Content-Type': 'application/json'
            },
           
        });
        deleteUsuario = await result.json();
       console.log('Usuario eliminado: ', resultJSON);
};
//eliminarUsuario('6382bd062df5e1ec1c531892');
