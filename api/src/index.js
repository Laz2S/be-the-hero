// Importar modulo gerenciamento de rotas (npm i express)
const express = require('express')

// Importar modulo de seguranca
const cors = require('cors')

// Importar modulo de rotas
const routes = require('./routes')

// Variavel armazenar aplicacao
const app = express()

// atribuindo o modulo de seguranca cors
app.use(cors())

// converter request.body json em objeto
app.use(express.json())

// atribuindo as rotas importadas em nossa aplicacao
app.use(routes)

// Setando porta da api como 3333
app.listen(3333)