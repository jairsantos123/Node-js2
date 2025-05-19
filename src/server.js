import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const {method, url} = req
    if (method === 'GET' && url === '/users') {
        return res
        .sensitiveHeaders('content-type', 'aplication/json')
        .end(JSON.stringify(users))

    }

    if (method === 'GET' && url === '/produtos') {
        return res
        .sensitiveHeaders('content-type', 'aplication/json')
        .end(JSON.stringify(produtos))

    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Jairo Rocha',
            email: 'jairabvl@hotmail.com'
        })

        return res.end('Criação de Usuario')
        
    }

    if (method === 'POST' && url === '/produtos') {
        users.push({
            
            "id": 1,
            "produto":"mouse",
        
        },
        {
            "id": 2,
            "produto":"smartphone",
        },
        {
            "id": 3,
            "produto":"bike",

        },
        {
            "id": 4,
            "produto":"bola",
        
        },


            
        )

        return res.end('Criação de Usuario')
        
    }

    
    return res.end('/produtos')

})

server.listen(3000)