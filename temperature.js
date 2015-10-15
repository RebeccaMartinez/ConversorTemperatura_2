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
}

Temperatura.prototype = new Medida();

/*Pasa los Celsius a Fahrenheit y Kelvin*/
Temperatura.prototype.celsius = function(num, result1, result2) {
  result2 = num + 273.15;
  result1 = (num * 9/5)+32;
  result1 = result1.toFixed(1)+" Farenheit"
  result2 = result2.toFixed(1) + " Kelvin"
  return result1 + ", " +result2;
};

/*Pasa los Fahrenheit a Celsius y Kelvin*/
Temperatura.prototype.fahrenheit = function(num, result1, result2) {
  result1 = (num - 32)*5/9;
  result2 = result1 + 273.15;
  result1 = result1.toFixed(1)+" Celsius"
  result2 = result2.toFixed(1) + " Kelvin"
  return result1 + ", " +result2;
};

/*Pasa los Kelvin a Celsius y Fahrenheit*/
Temperatura.prototype.kelvin = function(num, result1, result2) {
  result1 = num - 273.15;
  result2 = 1.8 * (num - 273.15) + 32;
  result1 = result1.toFixed(1)+" Celsius"
  result2 = result2.toFixed(1) + " Farenheit"
  return result1 + ", " +result2;
};

function calculate(){
  var result1;
  var result2;
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
      final = convertir.celsius(m[1], result1, result2);
    }
    if(convertir.get_tipo() == 'f' || convertir.get_tipo() == 'F'){
      final = convertir.fahrenheit(m[1], result1, result2);
    }
    if(convertir.get_tipo() == 'k' || convertir.get_tipo() == 'K'){
      final = convertir.kelvin(m[1], result1, result2);
    }
    document.getElementById("converted").setAttribute("col", "gr");
    converted.innerHTML = final;

  }
  else{
    document.getElementById("converted").setAttribute("col", "rd");
    converted.innerHTML = "ERROR! Introduzca algo tipo '-4.2C', '78K', '23f' ...";
  }
}
