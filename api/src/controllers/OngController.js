// pacote criptografia
const crypto = require('crypto')

// importar pacote conexao com banco de dados
const connection = require('../database/connection')

module.exports = {
    // metodo Get Collection
    async index (request, response) {
        // receber as query
        const { name } = request.query
    
        const ongs = await connection('ongs').select('*')
    
        return response.json(ongs)
    },
    // metodo Post
    async create(request, response) {
        // receber body json
        const { name, email, whatsapp, city, uf } = request.body
    
        // gerar ID
        const id = crypto.randomBytes(4).toString('HEX')
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({
            id
        })
    },
    // metodo Put
    async update (request, response) {
        // receber parametro id
        const id = request.params ? request.params.id : null

        // receber body json
        const { name, email, whatsapp, city, uf } = request.body
    
        await connection('ongs').update({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        }).where('id', id)
    
        return response.json({
            id
        })
    },
    // metodo Get One
    async show (request, response) {
        // receber parametro id
        const id = request.params ? request.params.id : null

        // receber as query
        const params = request.query
    
        const ongs = await connection('ongs').select('*').where('id', id)
    
        return response.json(ongs)
    },
    // metodo Delete
    async delete (request, response) {
        // receber parametro id
        const id = request.params ? request.params.id : null

        await connection('ongs').delete().where('id', id)
    
        return response.json({
            id
        })
    }
}