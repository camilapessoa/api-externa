const express = require('express');
const animesRoutes = require('./routes/animesRoutes');

const app = express();

app.use(express.json());
app.use('/animes', animesRoutes)

module.exports = app