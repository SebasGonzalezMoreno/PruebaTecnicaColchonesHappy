const selectColor = document.querySelector('#ChangeColor');
const container = document.querySelector('.container');
const input_color = document.querySelector('#txt-color');
const btn_generate = document.querySelector('#btn-generate');
const tittle = document.querySelector('#tittle');
const txt = document.getElementById('txt');

const claro = document.getElementById("claro");
const oscuro = document.getElementById("oscuro");
const contenedor = document.getElementById("contenedor");
const body = document.getElementById("body");

claro.addEventListener('click',cambioClaro);
oscuro.addEventListener('click',cambioOscuro);




function cambioClaro(){
    body.style.backgroundColor="white";
    body.style.transition = "all .5s ease"
    claro.setAttribute("class","ocultar");
    oscuro.setAttribute("class","mostrar boton-oscuro");
    contenedor.setAttribute("class","container");
    btn_generate.setAttribute("class","button")
    input_color.setAttribute("class","input");
}

function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z0-9]/;
    tecla_final = String.fromCharCode(tecla);
    txt.innerHTML=e.target.value;
    return patron.test(tecla_final);
}

function cambioOscuro(){
    body.style.backgroundColor="black";
    body.style.transition = "all .5s ease"
    oscuro.setAttribute("class","ocultar");
    claro.setAttribute("class","mostrar boton-claro");
    contenedor.setAttribute("class","container-black");
    btn_generate.setAttribute("class","button-black");
    input_color.setAttribute("class","input-black");
}


function generate_color() { 
    container.style.backgroundColor= "#"+randomNum();
    tittle.style.color= "#"+randomNum();
    container.style.transition= "all .5s ease";
}

function randomNum(min=100, max=900) {
    return parseInt( Math.random() * (max - min) + min);	
}


