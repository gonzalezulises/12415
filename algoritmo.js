var diausuario=prompt("ingrese un dia de la semana");
var posicionnumero = [1,2,3,4,5,6,7]
var posiciondia = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]

//Primera forma, para nada elegante
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
        alert('El numero introducido es par');
    }
else {
        alert('El numero introducido es impar');
    }



//otra forma un poco mas elegante

if ( diausuario == 'martes'|| diausuario == 'jueves'|| diausuario == 'sabado') {
    document.write ("ese es un dia par")
}
else {
    document.write ("ese es un dia impar")
}

//otra forma un poco mas elegante

if (['martes', 'jueves', 'sabado'] .indexOf(posiciondia) >= 0) {
    document.write ("ese es un dia par");
}
else {
    document.write ("ese no es un dia impar")
}