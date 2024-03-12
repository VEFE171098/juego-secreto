/*let titulo = document.querySelector("h1");
titulo.innerHTML = ("Juego del nuemro secreto");
Esto nos sirve para poder hacer los cambios que tenemos en nuestro titulo o parrafo de HTML entonces por eso es importante
ya que vamos a crear una funcion en la cual podamos utilizarla y solo mandar a llamar al texto que necesitamos
let parrafo = document.querySelector("p");
parrafo.innerHTML = ("Indica un numero del 1 al 10");*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); // esta es nuestra funcion donde pondremos el elemento p para parrafo
    elementoHTML.innerHTML = texto;                      //y para poder poner el titulo seria h
    return;

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); // toma el valor por ID

   console.log(intentos);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p', `acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`); //? if y : else
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        // el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja (); // para limpiar la caja cuando no se acierta
    }
    return;
}
function generarNumeroSecreto() {

    console.log(numeroGenerado); //nos muestra el numero generado
    console.log(listaNumerosSorteados); // nos muestra como se va guardando los numeros en la lista

    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }

    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    // si el numero generado esta incluido en la lista hacemos operacion si no otra
    if(listaNumerosSorteados.includes(numeroGenerado)){ // para revisar si ya esta el numero en la lista
        return generarNumeroSecreto(); // para generar un numero aleatorio nuevo
    }else {
        listaNumerosSorteados.push(numeroGenerado); //ingresamos a la lista el numero que no esta
        return numeroGenerado;
    }
}
function limpiarCaja(){
  //  let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = ''; // para que podamos limpiar la caja lo dejamos vacio
    // o podemos poner lo siguiente
    document.querySelector('#valorUsuario').value = '';
}
function condicionesIniciales(){
    asignarTextoElemento("h1", "juego del numero secreto nuevo");
    asignarTextoElemento("p", `Indicame un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto =  generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de dos numeros
    //generar numero aleatorio
    //inicializar intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();


