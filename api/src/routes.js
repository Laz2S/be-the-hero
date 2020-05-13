// Importar modulo gerenciamento de rotas (npm i express)
const express = require('express')

// importar controlador de Ongs (Metodos CRUD)
const OngController = require('./controllers/OngController')

// importar controlador de Incidents (Metodos CRUD)
const IncidentController = require('./controllers/IncidentController')

// importar controlador de Login
const SessionController = require('./controllers/SessionController')

// importar controlador de Profile
const ProfileController = require('./controllers/ProfileController')

// Variavel gerenciamento de Rotas
const routes = express.Router()

// Gerenciando Rotas

// Login
routes.post('/sessions', SessionController.create)

// Profile
routes.get('/profile', ProfileController.index)

// CRUD ongs

// Get Collection
routes.get('/ongs', OngController.index)

// Post
routes.post('/ongs', OngController.create)

// Put
routes.put('/ongs/:id', OngController.update)

// Get One
routes.get('/ongs/:id', OngController.show)

// Delete
routes.delete('/ongs/:id', OngController.delete)

// CRUD incidents

// Get Collection
routes.get('/incidents', IncidentController.index)

// Post
routes.post('/incidents', IncidentController.create)

// Put
routes.put('/incidents/:id', IncidentController.update)

// Get One
routes.get('/incidents/:id', IncidentController.show)

// Delete
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes