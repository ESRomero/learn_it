
//Estructura de un Modulo y uso  de module.exports para exponer la funcionalidad del modulo.
    /*
    var libLearnItFunctions = {}; //JSON Javascript Objet Notation
    libLearnItFunctions.mensaje="Hola Mundo";
    libLearnItFunctions.version="v1.0";
    libLearnItFunctions.sayHello = ()=>{
        console.log("Exito");
    } //ES6

    module.exports = libLearnItFunctions;

    */

    //rutas -> router -> app:express
    // rutas -> router:entidad -> router:api -> app:express

    var express = require('express');
    var router = express.Router();
    //http://localhost:3000/api/version
    router.get( '/version', function(req, res){
           res.status(200).json({"version":"API v1.0"});
    });
     router.get( '/yo', function(req, res){
           res.status(200).json({'Nombre':'Jorge Eduardo Salgado Romero','Cuenta':'0801-1998-02725'});
    });


   module.exports = router;