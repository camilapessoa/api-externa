const axios = require('axios');

const baseUrl = 'https://api.jikan.moe/v4/anime'

const buscarAnimePorNome = async (nome) => {
    const resposta = await axios.get(baseUrl, {
        params: {
            q: nome
        }
    });
    return resposta.data;
}

module.exports = {
    buscarAnimePorNome
}