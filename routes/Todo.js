 const todoRoute =  require('express').Router()

 const TodoController = require('../controllers/TodoController')

 todoRoute.get('/' , TodoController.getAllTodos)

 todoRoute.get('/add', TodoController.addTodo)

 module.exports = todoRoute