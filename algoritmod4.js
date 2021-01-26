
var numerosuma
var numeropromedio
var numeroresta

alert ("El juego de los numeros");

var numero1 = prompt ("Ingresa el primer numero");
var numero2 = prompt ("Ingresa el segundo numero");
num1 = parseInt (numero1);
num2 = parseInt (numero2);

suma()
resta()
promedio()

function suma (numerosuma){
    numerosuma = num1 + num2;
    alert ("La suma de los numeros es: "+numerosuma);
}

function promedio (numeropromedio){
    numeropromedio = (num1 + num2)/2;
    alert ("El promedio de los numeros es: "+ numeropromedio);
}

function resta (numeroresta){
    numeroresta = num1 - num2;
    alert ("La resta de los numeros es: "+numeroresta);
}
