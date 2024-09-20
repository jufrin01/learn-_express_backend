const route = require('express').Router()

route.get('/', (req, res) => {
    res.send('Hello World!')
})

// route.get('/items' , (req, res) => {
//     res.send('pages ites')
// })

const  todoRouter = require('./Todo')
route.use('/todos', todoRouter)
///TODO todoRouter gak ke get end point, maka route.use akan meneruskan ke todoRouter

module.exports = route;
