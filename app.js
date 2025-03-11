let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
   if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos ==1 ? 'vez':'veces'} `); 
        document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
    //usuario no acerto
    if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor')
    }else{
         
       asignarTextoElemento('p', 'El numero secreto es mayor')    
    }
        intentos++;
        limpiarCaja();
        
   }

    return;
}

function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  
    console.log(`Numero Generado: ${numeroGenerado}`);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
    // Si el numero generado esta inlcuido en la lista 
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }        
}
}

function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del Numero Secreto');
    asignarTextoElemento('p',`Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;

}

function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //dejar el boton de nuevo juego desabilitado
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


