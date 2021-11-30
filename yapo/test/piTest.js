var assert = require("chai").assert;
var Pi = require("../api/domain/pi.js");
describe("verifica el valor de PI dependiendo de la cantidad de decimales calculados", function(){
    it("Verificar el valor de salida con assert.equal(value, 'value')", function(){
        var pi = new Pi();
        var seisDecimales = 6;
        var sieteDecimales = 7;
        var nueveDecimales = 9;
        var piSeisDecimales = 3.141592;
        var piSieteDecimales = 3.1415926;
        var piNueveDecimales = 3.141592653;

        var result = pi.calculaDecimalesPI(seisDecimales);
        assert.equal(result, piSeisDecimales);

        result = pi.calculaDecimalesPI(sieteDecimales);
        assert.equal(result, piSieteDecimales);

        result = pi.calculaDecimalesPI(nueveDecimales);
        assert.equal(result, piNueveDecimales);
    });
})