 const { Todo } = require('../models');
    ///destikturing models
class TodoController {

    static getAllTodos(req,res) {
     Todo.findAll()
         .then(todos =>
             res.json(todos))
         .catch(err => {
             res.json(err)
        })
    }

    static addTodo(req,res) {
        res.json({
            message: 'pages Todos add',
        })
    }
}

module.exports = TodoController;