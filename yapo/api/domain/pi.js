module.exports = class Pi {

    calculaDecimalesPI(numeroRandom) {

        return +Math.PI.toString().slice(0, (Math.PI.toString().indexOf(".")) + (numeroRandom + 1));
    }
}