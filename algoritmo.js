var diausuario=prompt("ingrese un dia de la semana");
var posicionnumero = [1,2,3,4,5,6,7];


//Primer intento, para nada elegante sin el "for"
if (diausuario == "lunes"){
    a=1;
   
}
else if (diausuario == "martes"){
    a=2;
    
}
else if (diausuario == "miercoles"){
    a=3;
    
}
else if (diausuario == "jueves"){
    a=4;
    
}
else if (diausuario == "viernes"){
    a=5;
    
}
else if (diausuario == "sabado"){
    a=6;
    
}
else if (diausuario == "domingo"){
    a=7;
    
}

if (a % 2 == 0){
        alert('El dia introducido es un numero par en la semana');
    }
else {
        alert('El dia introducido es un numero impar en la semana');
    }



//otra forma un poco mas elegante

if ( diausuario == 'martes'|| diausuario == 'jueves'|| diausuario == 'sabado') {
    document.write ("ese es un dia par");
}
else {
    document.write ("ese es un dia impar");
}

//otra forma como lo pide coderhouse

var posiciondia = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
for (var i=0; i<7 ; i++) {
    if (i<6){
    alert (posiciondia[i]);
    }
    else {
    alert ("Llegamos al domingo");    
    }
}