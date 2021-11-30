var assert = require("chai").assert;
var Randomness = require("../api/domain/randomness.js");
describe("Obtiene un numero aleatorio entre el parametro de entrada dividido entre 2 y el mismo parametro", function(){
    it("Verificar el valor de salida con assert.isNotNull(value)", function(){
        var aleatoriedad = new Randomness();
        var parametroDummy = 10;
        var result = aleatoriedad.obtieneValorRandom(parametroDummy);
        assert.isNotNull(result);
    });
    it("Verificar el valor de salida con assert.isAbove(value, 'value')", function(){
        var aleatoriedad = new Randomness();
        var parametroDummy = 10;
        var result = aleatoriedad.obtieneValorRandom(parametroDummy);
        assert.isAbove(result, (parametroDummy/2));
    });
    it("Verificar el valor de salida con assert.isBelow(value, 'value')", function(){
        var aleatoriedad = new Randomness();
        var parametroDummy = 10;
        var result = aleatoriedad.obtieneValorRandom(parametroDummy);
        assert.isBelow(result, (parametroDummy));
        assert.isNotNull
    });
})