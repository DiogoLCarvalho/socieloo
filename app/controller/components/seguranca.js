function ocultarSenha(senha) {
    let sha1 = require('sha1');
    console.log(senha);
    let hash = sha1(senha);
    console.log(hash);
    return hash;
}

module.exports = {ocultarSenha};

