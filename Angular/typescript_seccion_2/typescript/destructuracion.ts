(function(){

    //DESTRUCTURACION
    const avenger = {
        nombre : 'diego',
        apellido : 'ruiz bautista',
        poder : 'programar'
    }
    //funcion con destructuracion como parametro
    const extraer = ({nombre,apellido} : any) =>{
        console.log(nombre)
        console.log(apellido)
    }
    //invocamos
    extraer(avenger);
    //tradiciconal
    const {nombre , apellido, poder} = avenger;
    console.log(nombre)
    console.log(apellido)
    console.log(poder)

    //DESTRUCTURACION EN ARREGLOS 

    const avengers : String [] = ['diego','jose','marcos']

    //funcion con destruturacion de arreglos
    const extraerArreglo = ([elemento1, ,elemento2]: String[]) =>{
        console.log(elemento1)
        console.log(elemento2)
    }
    //invocamos
    extraerArreglo(avengers)
    //tradiciconal
     const [elemento1, , elemento3] = avengers;
    console.log(elemento1)
    console.log(elemento3) 


})();


