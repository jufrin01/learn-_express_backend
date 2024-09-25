 const todoRoute =  require('express').Router()

 const TodoController = require('../controllers/TodoController')

 todoRoute.get('/' , TodoController.getAllTodos)
 todoRoute.post('/add', TodoController.addTodo)
 todoRoute.get('/find/:id', TodoController.getTodoById)

 module.exports = todoRoute