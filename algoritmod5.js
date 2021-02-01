function inventario (marca,tipo) {
    this.marca = marca
    this.tipo = tipo;
  };

  let getDatosPCmarca = prompt ("¿Qué marca de computadora deseas ingresar","Dell,Hp,Alienware,MSI");
  let getDatosPCtipo = prompt ("¿Qué tipo de computadora deseas ingresar","desktop,notebook");    
  

var getDatos = new inventario ( getDatosPCmarca,getDatosPCtipo)

console.log (getDatos)
alert(getDatos)



