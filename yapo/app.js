'use strict';

const Randomness = require("./api/domain/randomness.js");
const Pi = require("./api/domain/pi.js");
const express = require("express");
const app = express();
const port = 3000;

app.get('/pi/:parametro', function(req, res) {
    
    if(req.params.parametro < 0){
        res.send("El parametro debe ser un numero positivo");
    } else if(req.params.parametro == 0){
        res.send("Si el parametro es 0, no se calcularia un nuemro aleatorio a partir de 0. Mejor que sea un numero mayor a 0");
    }
    
    var aleatoriedad = new Randomness();
    var pi = new Pi();
    var numeroRandom = aleatoriedad.obtieneValorRandom(req.params.parametro);
    var respuesta = pi.calculaDecimalesPI(numeroRandom);
    
    res.send("parametroEntrada: " + req.params.parametro + "<br>"
            + "numeroRandom: " + numeroRandom + "<br>"
            + "PiCalc: " + respuesta);  
})

app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
});
app.listen(port, () => {
    console.log("El servidor está inicializado en el puerto", port);
});