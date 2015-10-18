"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function Medida(valor, tipo){
  this.valor = valor;
  this.tipo = tipo;
}

Medida.prototype.get_tipo = function() {
  return this.tipo;
}

Medida.prototype.get_valor = function() {
  return this.valor;
};

Medida.prototype.set_tipo = function(tipo) {
  this.tipo = tipo;
}

Medida.prototype.set_valor = function(valor) {
  this.valor = valor;
}

function Temperatura(){
  Medida.call(this);
}

Temperatura.prototype = new Medida();

/* Pasa los Fahrenheit a Celsius*/
Temperatura.prototype.fac = function(){
  var result1 = (this.get_valor() - 32)*5/9;
  return result1;
};

/* Pasa los Fahrenheit a Kelvin*/
Temperatura.prototype.fak = function(){
  var result1 = ((this.get_valor() - 32)*5/9) + 273.15;
  return result1;
};

/* Pasa los celsius a Kelvin*/
Temperatura.prototype.cak = function(){
  var result1 = this.get_valor() + 273.15;
  return result1;
};

/* Pasa los celsius a Fahrenheit*/
Temperatura.prototype.caf = function(){
  var result1 = (this.get_valor() * 9/5)+32;
  return result1;
};

/*Pasa los Kelvin a Celsius*/
Temperatura.prototype.kac = function(){
  var result1 =  this.get_valor() - 273.15;
  return result1;
};

/*Pasa los Kelvin a Fahrenheit*/
Temperatura.prototype.kaf = function(){
  var result1 =  1.8 * (this.get_valor() - 273.15) + 32;
  return result1;
};

function calculate(){
  var final = 0;
  var temp = original.value;
  var regexp = /([+-]?\d+(?:\.\d*)?(?:\s*[eE]\d+)?)\s*([fFcCkK])/
  var m = temp.match(regexp);

  if(m){
    m[1] = parseFloat(m[1]);
    var convertir = new Temperatura(0,0);
    convertir.set_tipo(m[2]);
    convertir.set_valor(m[1]);
    if(convertir.get_tipo() == 'c' || convertir.get_tipo() == 'C'){
      final = convertir.caf().toFixed(2) + " Fahrenheit" + ", " +convertir.cak().toFixed(2) + "Kelvin";
    }
    if(convertir.get_tipo() == 'f' || convertir.get_tipo() == 'F'){
      final = convertir.fac().toFixed(2) + " Celsius" + ", " +convertir.fak().toFixed(2) + "Kelvin";
    }
    if(convertir.get_tipo() == 'k' || convertir.get_tipo() == 'K'){
      final = convertir.kac().toFixed(2) + "Celsius" + ", " +convertir.kaf().toFixed(2) + "Fahrenheit";
    }
    document.getElementById("converted").setAttribute("col", "gr");
    converted.innerHTML = final;

  }
  else{
    document.getElementById("converted").setAttribute("col", "rd");
    converted.innerHTML = "ERROR! Introduzca algo tipo '-4.2C', '78K', '23f' ...";
  }
}
