'use strict'

var numero1 = parseInt(prompt("¿Ingrese el primer numero?", 0));
var numero2 = parseInt(prompt("¿Ingrese el segundo numero?", 0));
var datosNuevos = ["Deni, Gustavo, Ramon, Elcrudo"];


while(numero1 == numero2 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("¿Ingresa de nuevo el primer numero?", 0));
    numero2 = parseInt(prompt("¿Ingresa de nuevo el segundo numero?", 0));
    alert("LOS NUMEROS SON IGUALES");
}

if(numero1 > numero2){
    alert("EL NUMERO MAYOR ES: "+numero1);
    alert("EL NUMERO MENOR ES: "+numero2);
    datosNuevos.push(numero1);
}if(numero2 > numero1){
    alert("EL NUMERO MAYOR ES: "+numero2);
    alert("EL NUMERO MENOR ES: "+numero1);
    datosNuevos.push(numero2);
}

console.log(datosNuevos);