var expect = chai.expect;

describe("Tests BDD", function() {

   var aux = document.getElementById("converted");

  it("-12.3C === 9.9 Farenheit, 260.8 Kelvin", function() {
    var temp = new Temperatura();
    temp.set_valor(-12.3);
    temp.set_tipo("C");
    var res = temp.celsius();
    expect(res).to.equal('9.9 Farenheit, 260.8 Kelvin');
  });

  it("25e4k === 249726.9 Celsius, 449540.3 Farenheit", function() {
    var temp = new Temperatura();
    temp.set_valor(25e4);
    temp.set_tipo("k");
    var res = temp.kelvin();
    expect(res).to.equal("249726.9 Celsius, 449540.3 Farenheit");
  });

  it("32F === 0.0 Celsius, 273.1 Kelvin", function() {
    var temp = new Temperatura();
    temp.set_valor(32);
    temp.set_tipo("F");
    var res = temp.fahrenheit();
    expect(res).to.equal("0.0 Celsius, 273.1 Kelvin");
  });

  it("18.3f !== 0.4 Celsius, 213.6 Kelvin", function() {
    var temp = new Temperatura();
    temp.set_valor(18.3);
    temp.set_tipo("f");
    var res = temp.fahrenheit();
    expect(res).not.to.equal("0.4 Celsius, 213.6 Kelvin");
  });


  it("Resultado = 65.1", function() {
    var temp = new Temperatura();
    temp.set_valor(65.1);
    temp.set_tipo("K");
    expect(temp.get_valor()).to.equal(65.1);
    expect(temp.get_tipo()).to.equal("K");
  });

  it("32.4c === 90.3 Farenheit, 305.5 Kelvin", function() {
     window.onload = function() {
       var temp = new Temperatura();
       var res = "90.3 Farenheit, 305.5 Kelvin";
       expect(aux.innerHTML).to.equal("90.3 Farenheit, 305.5 Kelvin");
     }
   });

  it("5X = ERROR", function() {
       window.onload = function() {
         var temp = new Temperatura(5,"X");
         calculate();
         expect(fin.innerHTML).to.match("/ERROR/");
      }
    });
});
