let num1 = '';
let num2 = '';
let operacion = '';
let cont = 0;

function init(){
    let resultado = document.getElementById('resultado');
    let reset = document.getElementById('reset');
    let borrar = document.getElementById('borrar');
    let raiz = document.getElementById('raiz');
    let raizc = document.getElementById('raizc');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion'); 
    let division = document.getElementById('division');
    let potencia = document.getElementById('potencia');
    let porcentaje = document.getElementById('porcentaje');
    let igual = document.getElementById('igual');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');
    let punto = document.getElementById('punto');

    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + '1';
    }

    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + '2';
    }

    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + '3';
    }

    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + '4';
    }

    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + '5';
    }

    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + '6';
    }

    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + '7';
    }

    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + '8';
    }

    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + '9';
    }

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + '0';
    }

    punto.onclick = function(e){
        if (cont < 1 ){
            resultado.textContent = resultado.textContent + '.';
            cont = cont + 1;
        }
    }

    reset.onclick = function(e){
        resetear();
    }

    borrar.onclick = function(e){
        resultado.textContent = resultado.textContent.toString().slice(0, -1);
    }

    suma.onclick = function(e){
        num1 = resultado.textContent;
        operacion = '+';
        limpiar();
    }

    resta.onclick = function(e){
        num1 = resultado.textContent;
        operacion = '-';
        limpiar();
    }

    multiplicacion.onclick = function(e){
        num1 = resultado.textContent;
        operacion = 'x';
        limpiar();
    }

    division.onclick = function(e){
        num1 = resultado.textContent;
        operacion = '/';
        limpiar();
    }

    potencia.onclick = function(e){
        num1 = resultado.textContent;
        operacion = '^';
        limpiar();
    }

    raiz.onclick = function(e){
        num1 = resultado.textContent;
        operacion = '√';
        limpiar();
    }

    raizc.onclick = function(e){
        num1 = resultado.textContent;
        operacion = '∛';
        limpiar();
    }

    porcentaje.onclick = function(e){
        num1 = resultado.textContent;
        operacion = '%';
        limpiar();
    }

    igual.onclick = function(e){
        num2 = resultado.textContent;
        resolver();
    }
}

function Imprimir(){
    resultado.textContent 
}

function limpiar(){
    resultado.textContent = '';
    resultado1.textContent = '';
    cont = 0;
}

function resetear() {
    resultado.textContent = '';
    num1 = 0;
    num2 = 0;
    cont = 0;
    operacion = '';
}

function resolver(){
    let r = 0;
    cont = 1;
    switch (operacion) {
        case '+':
            r = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            r = parseFloat(num1) - parseFloat(num2);
            break;
        case 'x':
            r = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            r = parseFloat(num1) / parseFloat(num2);
            r = r.toFixed(5)
            break;
        case '^':
            r = parseFloat(num1) ** parseFloat(num2);
            break;
        case '√':
            r = parseFloat(num1) ** (1/2);
            r = r.toFixed(5)
            break;
        case '∛':
            r = parseFloat(num1) ** (1/3);
            r = r.toFixed(5)
            break;
        case '%':
            r = parseFloat(num1) * (parseFloat(num2) / 100);
            r = r.toFixed(5)
            break;
    }
    resetear();
    resultado.textContent = r;
}
