'use strict'

/*
1- hacer que al darle clicks a un botón pida 2 nombres

2- al introducir los nombres crear una función donde meta 
los datos en un array

3- crear otro botón donde que al darle clicks me 
muestre los nombres introducidos por pantalla
*/

let miBoton = document.querySelector("#pedir_datos");
let miBoton2 = document.querySelector("#mostrar");
var box_dashed = document.querySelector(".dashed");
box_dashed.style.display = "none";

miBoton.onclick = pedir;
miBoton2.onclick = mostrar;

var datos = [];

function pedir(datos){
    var nombre = prompt("Mete tu Nombre");
    var apellido = prompt("Mete tu Apellido");
    datos = [nombre, apellido];
    alert("Datos enviados "+nombre+' '+apellido);
    console.log([nombre, apellido]);
}

function mostrar(){
    box_dashed.style.display = "block";

    var p_nombre = document.querySelector("#dnombre span");
    var p_apellidos = document.querySelector("#dapellidos span");

    p_nombre.innerHTML = datos;
    p_apellidos.innerHTML = datos;
};