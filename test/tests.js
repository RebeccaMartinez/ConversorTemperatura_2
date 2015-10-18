var expect = chai.expect;

describe("Tests BDD", function() {

   var aux = document.getElementById("converted");

  it("-12.3C === 9.86 Farenheit", function() {
    var temp = new Temperatura();
    temp.setValor(-12.3);
    temp.setTipo("C");
    var res = temp.caf();
    expect(res).to.equal(9.86);
  });

  it(" 32c === 305.15Kelvin", function() {
    var temp = new Temperatura();
    temp.setValor(32);
    temp.setTipo("c");
    var res = temp.cak();
    expect(res).to.equal(305.15);
  });

  it("25e4k === 249726.85 Celsius", function() {
    var temp = new Temperatura();
    temp.setValor(25e4);
    temp.setTipo("k");
    var res = temp.kac();
    expect(res).to.equal(249726.85);
  });

  it("-21.3K === -498.01Fahrenheit", function() {
    var temp = new Temperatura();
    temp.setValor(-21.3);
    temp.setTipo("K");
    var res = temp.kaf();
    expect(res).to.equal(-498.01);
  });

  it("32F === 0.0 Celsius", function() {
    var temp = new Temperatura();
    temp.setValor(32);
    temp.setTipo("F");
    var res = temp.fac();
    expect(res).to.equal(0.0);
  });

  it("-18.3f !== 213.6 Kelvin", function() {
    var temp = new Temperatura();
    temp.setValor(-18.3);
    temp.setTipo("f");
    var res = temp.fak();
    expect(res).not.to.equal(213.6);
  });

  it("Resultado = 65.1", function() {
    var temp = new Temperatura();
    temp.setValor(65.1);
    temp.setTipo("K");
    expect(temp.getValor()).to.equal(65.1);
    expect(temp.getTipo()).to.equal("K");
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
