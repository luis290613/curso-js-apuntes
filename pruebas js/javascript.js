//OBJECT CONTRUCTOR Y OBJECT LITERAL

//objeto literal: - > data dura
/* const datosPersonales = {
    nombre: 'diego',
    apellidos: 'ruiz abutista'
};

//objeto constructor: - > dinamico por que puedes crear muchas instancias

function datosPersonales1(nombre, apellido) {
    this.nombre = nombre,
        this.apellido = apellido
};

//creando instancias del objeto constructor:
const persona1 = new datospersonales1('jose', 'ruiz huertas');
const persona2 = new datosPersonales1('eulalia', 'bautista vargas');

console.log(persona1); // {nombre : jose, apellido : ruiz huertas}
console.log(persona2); // {nombre : eulalia, apellido : bautista vargas} */



/*-------------------------------------------****-------------------------------------- */


//PROTOTYPE: nos permmite crear funcione suq esolo se utilizan en un objeto especifico

// OBJETO CONTRUCTOR 
/* function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
// con prototype creamos funciones que solo se usaran en el objeto
Cliente.prototype.formatoObjeto = function() {
    return `mi nombre es ${this.nombre} y mi apellido : ${this.apellido}`;
}

const persona1 = new Cliente('diego', 'ruiz bautista');
console.log(persona1);

console.log(persona1.formatoObjeto()); */


/*-------------------------------------------****-------------------------------------- */


// LA NUEVA FORMA DE DECLARAR OBJETOS Y METODOS POR MEDIO DE CLASES 

/* class Producto {
    constructor(nombre, precio) {
            this.nombre = nombre;
            this.precio = precio;
        }
        //METODOS
    formatearTexto() {
        return `mi nombre es : ${this.nombre} y mi precio : ${this.precio}`;
    }
}



//INSTANCIAMOS
const persona1 = new Producto('diego', 400);
console.log(persona1);
console.log(persona1.formatearTexto()); */



/*-------------------------------------------****-------------------------------------- */


//HERENCIA
/* class Productito extends Producto {
    constructor(nombre, precio, isbn) {
            //con el super heredamos desde la clase extendida
            super(nombre, precio)
            this.isbn = isbn;
        }
        //tambien podemos heredar metodos
    formatearTexto() {
        return `${super.formatearTexto()}, su isbn es : ${this.isbn}`;
    }
}
const nuevoProductito = new Productito('el gallo mas gallo', 150, 9999000)
console.log(nuevoProductito);
console.log(nuevoProductito.formatearTexto()) */


/*-------------------------------------------****-------------------------------------- */


//TRY CATCH 
//no permite que la app no se caiga por algun error existente -> solo usar en escenarios 
//importantes como conexion a bses de datos, consumos de apis, validacion de sesiones, ect
/* const num1 = 10;
const num3 = 30;
console.log(num1);
try {
    console.log(num2);
} catch (error) {
    console.log(error)
}
console.log(num3) */


/*-------------------------------------------****-------------------------------------- */


//PROMESAS
/* const usuarioAutenticado = new Promise((resolve, reject) => { //resolve,reject no son necesarios por que vienen por defecto
    const autenticado = false
    if (autenticado) {
        resolve('usuario autenticado'); //promise cumplido
    } else {
        reject('no se pudo iniciar sesion') // promise incumplido 
    }
});
console.log(usuarioAutenticado)

usuarioAutenticado
    .then(resultado => console.log(resultado)) // lo de abajo es lo mismo solo que se aplico ARROW FUNCTION
    .catch(function(error) {
        console.log(error)
    })

//En las promesas existen 3 valores
//Pending : no se ha cumplido pero tampoco se a rechazado
//Fultilled : ya cumplio
//Rejected : Se a rechazado o no secumplio

//NOTIFICACION API 
const boton = document.querySelector('#boton');
boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => {
            //console.log(resultado)
            if (resultado == 'granted') {
                new Notification('esta es una notificacion de prueba', {
                    icon: 'img/luis-diego.jpg',
                    body: 'luis diego ruiz bautista'
                })
            }
        })
}); */


/*-------------------------------------------****-------------------------------------- */

//ASYNC AWAIT
//para poder crear bloques asincronos (que se ejecutan en un hilo distinto practicamente)
/* function desacargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('descargando clientes...');
        setTimeout(() => {
            resolve('clientes descargados con exito');
        }, 3000);
    });
}

async function app() {
    try {
        const resultado = await desacargarNuevosClientes();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
app();
console.log('ultima linea') */


/*-------------------------------------------****-------------------------------------- */

//USANDO VARIOS ASYNC AWAIS A LA VEZ
//creando un arreglo de promises al momento mandarlos a llamar para que se ejecuten de forma asincrona
/* function desacargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('descargando clientes...');
        setTimeout(() => {
            resolve('clientes descargados con exito');
        }, 4000);
    });
}

function desacargarNuevosPedidos() {
    return new Promise(resolve => {
        console.log('descargando pedidos...');
        setTimeout(() => {
            resolve('pedidos descargados con exito');
        }, 3000);
    });
}

async function app() {
    try {
        const resultado = await Promise.all([desacargarNuevosClientes(), desacargarNuevosPedidos()])
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();
console.log('ultima linea') */


/*-------------------------------------------****-------------------------------------- */


//fETCH API
//para poder consumir servicios o hacer peticiones
//1. creamos un json para simular la respuesta del servidor empleado.json

//CON ASYNC AWAIT
/* async function obtenerEmpleado() {
    const archivo = 'empleado.json'; //url

    const resultadoApi = await fetch(archivo); //async await
    const datos = await resultadoApi.json();
    //destructuring
    const { empleados } = datos;
    empleados.forEach(item => {
        console.log(item.nombre)
    });
}
obtenerEmpleado();

//CON PROMESAS
function obtenerEmpleado() {
    const archivo = 'empleado.json'; //url

    fetch(archivo) //PROMESAS
        .then(resultado => {
            return resultado.json();
        })
        .then(datos => {
            //console.log(datos);
            //destructuring
            const { empleados } = datos;
            empleados.forEach(empleado => {
                console.log(empleado.nombre)
            });
        })
}
obtenerEmpleado(); */

/*-------------------------------------------****-------------------------------------- */