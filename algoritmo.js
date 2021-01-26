var diausuario=prompt("ingrese un dia de la semana");
var diassemana= ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]

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


for (var i=0 ;i<7;i++) {
  if (i = a ){
 diapar ()
  break;
 } 
}

function diapar(i){
    if(a = 2||4||6)  {
  alert("EL dia de la semana es par")
  }
else {
  alert("El dia es impar");
  }
}  