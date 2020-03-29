// pacote criptografia
const crypto = require('crypto')

// importar pacote conexao com banco de dados
const connection = require('../database/connection')

module.exports = {
    // metodo Get Collection
    async index (request, response) {
        // receber as query
        const query = request.query

        const { page = 0, limit = (Math.pow(1000, 100)) } = query

        delete query.page
        
        delete query.limit

        // variavel formatar query
        const formattedQuery = Object.keys(query).reduce((a, b, index, array) => a + `incidents.${b} like "%${query[b]}%"${array.length > (index + 1) ? ' and ' : ''}`, '')

        // variavel receber quantidade de resultados
        const [count] = await connection('incidents')
        .where(connection.raw(formattedQuery))
        .count()

        // adicionar no header do response a variavel count
        response.header('X-Total-Count', count['count(*)'])

        return await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ])
        .where(connection.raw(formattedQuery))
        .limit(limit)
        .offset((page - 1) * limit)
        .then(res => {
            if (res.length > 0) {
                response.json(res)
            } else {
                response.status(404).json({ error: 'Register not found.' })
            }
        })
    },
    // metodo Post
    async create(request, response) {
        // receber body json
        const { title, description, value } = request.body

        // recebe cabecalho
        const ong_id = request.headers.authorization
    
        if (!ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' })
        }

        return await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })
        .then(res => {
            if (res >= 1) {
                response.status(200).json({ message: 'Register created with success.' })
            } else if (res === 0) {
                response.status(404).json({ error: 'Register not found.' })
            }
        })
        .catch(err => response.status(400).json({ error: 'Missing attributes.' }))
    },
    // metodo Put
    async update (request, response) {
        // receber parametro id
        const id = request.params ? request.params.id : null

        // recebe cabecalho
        const ong_id = request.headers.authorization

        // receber body json
        const { title, description, value } = request.body

        // verifica ong_id
        if (!ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' })
        }
    
        return await connection('incidents').update({
            title,
            description,
            value,
            ong_id
        }).where('id', id).andWhere('ong_id', ong_id)
        .then(res => {
            if (res >= 1) {
                response.status(200).json({ message: 'Register updated with success.' })
            } else if (res === 0) {
                response.status(404).json({ error: 'Register not found.' })
            }
        })
        .catch(err => response.status(400).json({ error: 'Missing attributes.' }))
    },
    // metodo Get One
    async show (request, response) {
        // receber parametro id
        const id = request.params ? request.params.id : null

        // recebe cabecalho
        const ong_id = request.headers.authorization

        // receber as query
        const params = request.query

        // verifica ong_id
        if (!ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' })
        }
    
        return await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ])
        .where('incidents.id', id)
        .andWhere('incidents.ong_id', ong_id)
        .then(res => {
            if (res.length > 0) {
                response.json(res)
            } else {
                response.status(404).json({ error: 'Register not found.' })
            }
        })
    },
    // metodo Delete
    async delete (request, response) {
        // receber parametro id
        const id = request.params ? request.params.id : null

        // recebe cabecalho
        const ong_id = request.headers.authorization

        if (!ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' })
        }

        return await connection('incidents').delete().where('id', id).andWhere('ong_id', ong_id)
        .then(res => {
            if (res >= 1) {
                response.status(200).json({ message: 'Register deleted with success.' })
            } else if (res === 0) {
                response.status(404).json({ error: 'Register not found.' })
            }
        })
    }
}