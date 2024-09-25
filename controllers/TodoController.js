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
        //desKtituring
        const { task, status } = req.body;
         Todo.create({ task, status, created_at: new Date(), updated_at: new Date() })
             .then(result =>{
                 res.json(result)
                     .catch(err => {
                         res.json(err)
                     })
             })
      res.json({
          task ,status
      })
    }
}

module.exports = TodoController;