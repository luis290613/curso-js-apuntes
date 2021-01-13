(function(){    
    
    //INTERFACES -> vendria hace como una plantilla o modelo a seguir 
    interface Xmen {
        nombre : String;
        edad : Number;
        poder?: String;
    }

    //funciones 
    const enviarMision = (xmen : Xmen) => {
        console.log(`enviando a ${xmen.nombre}`)
    }

    const regresarCuartel = (xmen : Xmen) =>{
        console.log(`regresa ${xmen.nombre} al cuartel`)
    }
    
    // OBJETO -> pordr  es tipo opcional 

    const wolverine : Xmen = {
        nombre : 'diego',
        edad : 20
    }
    enviarMision(wolverine);
    regresarCuartel(wolverine);


})();


