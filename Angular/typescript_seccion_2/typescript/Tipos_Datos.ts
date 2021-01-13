(function(){
    //variables en typesCript
    /* let mensaje : string = 'hola';
    let cualqueirCosa; //typo any que acepta cualquier tipo de dato
    let booleando : boolean = true; */
    

    /* tipos de datos en typeScript */
    //se respeta el tipo de dato asignado desde un inicio
    
    let mensaje : string = 'hola';
    
    let booleando : boolean = true;
    let hoy : Date = new Date();
    let hoy_resumido = new Date();
 

    let cualqueirCosa; //typo any que acepta cualquier tipo de dato
    cualqueirCosa = mensaje;
    cualqueirCosa = hoy;

    /* objetos */
    let spiderman = {
        nombre : 'spiderman',
        edad :30
    }
    spiderman = {
        nombre : 'diego',
        edad : 23
    }

    console.log(spiderman.nombre)
})();


