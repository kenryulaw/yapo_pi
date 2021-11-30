'use strict';

module.exports = class Randomness {

    obtieneValorRandom(parametro){

        var limiteInferior = parametro/2;
        var limiteSuperior = parametro;

        return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1) + limiteInferior);
    }
}