const route = require('express').Router()

route.get('/', (req, res) => {
    res.send('Hello World!')
})

const  todoRouter = require('./Todo')
route.use('/todos', todoRouter)
///TODO todoRouter gak ke get end point, maka route.use akan meneruskan ke todoRouter

module.exports = route;
