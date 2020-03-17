/*codigo de javaScript*/ 


// *******************************************************************

/*
    codigo de javaScript
*/ 
console.log("Ejecutando js.")

// codigo para ver el movimiento de estilo y animacion
// localizar menu
var nav = document.getElementById('menu');
// funcion window scroll funcional
window.onscroll = function(){
    // sentencia si esta apagado cuando el top sea menor de 100 y mayor que funcione
    if(window.pageYOffset > 100 ){
        nav.style.background = "#007bff";
        nav.style.boxShadow = "0px 4px 2px blu";
    }
    // si es menor que muestre esto
    else{
        nav.style.background = "transparent";
        nav.style.boxShadow = "none";
    }
}

// *******************************************************************

/*
    codigo de angular js
*/ 

var app = angular.module("app",[]);
app.controller("appCtrl",function($scope, $rootScope){

    console.log("Ejecutando Angular js");

});

// *******************************************************************

/*
    codigo de angular js
*/ 

$(document).ready(function(){

    console.log("Ejecutando Jquery js");

});

// *******************************************************************






















