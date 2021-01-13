(function(){

    //FUNCIONES  PARAMETROS OPCIONALES, OBLIGATORIOS Y POR DEFECTO
    //IMPORTANTE: el orden que se debe declarar los parametros es : OBLIGATORIOS, OPCIONAL, POR DEFECTO
    function activar( quien : String, momento?: String, objeto : String = 'batiseñal') {
        if (momento) {
            console.log(`la persona ${quien} activo ${momento} y ${objeto}`)
        } else {
            console.log(`la persona ${quien} y ${objeto}`)    
        }
        
    }
    activar('Gordon','opcionalll');
})();


