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

    miBoton.onclick = pedir;

    var data_user = [];

    function pedir(){
        
        miBoton2.disabled = false;
        
        var nombre = prompt("Mete tu Nombre");
        var apellido = prompt("Mete tu Apellido");

        alert("Datos enviados "+nombre+' '+apellido);
        data_user.push(nombre,apellido);
    }
    

    miBoton2.addEventListener('click',()=>{

       
       for(let i = 0; i < data_user.length; i++){
            let data = `
            
            <div class="box dashed">
            <h3>Informacion del usuario</h3>
            <hr>
            <p id="dnombre">
                <span>Nombre:${data_user[i++]}</span>
            </p>
            <p id="dapellido">
                <span>Apellidos:${data_user[i++]}</span>
            </p>
        </div>
            
            `;
             let alldata = document.querySelector("#alldata");
            
            alldata.innerHTML = data;

        }          
           
        console.log(data_user);
           
    });
  