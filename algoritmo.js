var diausuario=prompt("ingrese un dia de la semana lunes","martes","miercoles","jueves","viernes","sabado","domingo");
var diassemana= ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]


for (var i=1 ;i<7;i++) {
  if (diassemana[i] = diausuario ){
 diapar ()
  break;
 } 
}

function diapar(i){
    if(i = 2 ||4||6)  {
  alert("EL dia de la semana es par")
  }
else {
  alert("El dia es impar");
  }
}  