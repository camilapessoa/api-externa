const { buscarAnimePorNome } = require('../models/animeModels')

const obterAnimePorNome = async (req, res) => {
    const nome = req.query.nome;

    try {
        const data = await buscarAnimePorNome(nome);
        res.json(data)
    } catch (error) {
        res.status(500).send('Erro do servidor')
        
    }

}

module.exports = {
    obterAnimePorNome
}