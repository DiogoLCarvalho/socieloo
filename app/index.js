const express = require('express');
const app = express();

app.get("/", (res, resp) => {
    resp.send("Testando rota");
});

(async () => {
    const database = require('../app/model/services/bancoDeDados.js');
})();



app.listen(8081, () => {
    console.log("Rodando servidor");
});
