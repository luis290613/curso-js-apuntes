(function(){

    //FUNCIONES DE FLECHA 
    const sumarN = function (a:number,b : number) { 
        return a + b;
    }
    //transformando a funcion de flecha 
    const sumarnF = (a : number, b : number) => a+b;

    /* console.log(sumarN(10,20)) */
    /* console.log(sumarnF(100,200)) */

    /* IMPORTANTE SOBRE EL THIS: solo funciona para invocar al mismo objeto desde una funcion de flecha o arrow function */
    const hulk = {
        nombre: 'hulk',
        gritar(){
            setTimeout(() => {
                console.log(`${this.nombre} quiere gritarrrr`)
            }, 1000);
        }
    }
    
    hulk.gritar()

    //TIPADO DE RETORNO EN UNA FUNCION
    const sumar = (a : number , b:number) :number => {
        return a+b;
    }
    const nombre = ():string => 'hola diego'

    //TIPADO DE RETORNO EN UNA FUNCION QUE RETORNA UNA PROMESA

    const obtenerSalario = (nombre : string):Promise<string> => {
        return new Promise((resolve,reject) =>{
            resolve(`${nombre} gana 3k`)
        })
    }
    obtenerSalario('diegoooo')
    .then( respuesta => console.log(respuesta.toUpperCase()))
    .catch( error => console.log(error));

})();


