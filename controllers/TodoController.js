 const { Todo } = require('../models');
class TodoController {

    static getAllTodos(req,res) {
     Todo.findAll()
         .then(todos =>
             res.json(todos))
         .catch(err => {
             res.json(err)
        })
    }

    ///TODO ++==> BISA GET FILTER DENGAN WHERE Todo.findAll({
    //          where : {
    //              task: "task belajar backend"
    //          }  // kosongiin filter
    //   TODO   }) DAN BISA JUGA DENGAN ORDER BY Todo.findAll({{
    //          order: [
    //              ['id', 'DESC']  // ASC (ascending) or DESC (descending)
    //          ]  // kosongiin order by
    //      }})


    // TODO The destructuring assignment syntax unpack object properties into variables:
    //
    // TODO EXAPLE :: let {firstName, lastName} = person;


    static addTodo(req,res) {
        //destrukturing
        const { task, status } = req.body;
         Todo.create({ task, status, created_at: new Date(), updated_at: new Date() })
             .then(result => {
                 res.json(result)
                     .catch(err => {
                         res.json(err)
                     })
             })
      res.json({
          task ,status
      })
    }

    static getTodoById(req,res) {
        let id = parseInt(req.params.id);
        Todo.findByPk(id)
           .then(todo => {
                if (!todo) {
                    return res.status(404).json({ message: 'Todo not found' });
                }
                res.json(todo);
            })
           .catch(err => {
                res.json(err);
            });
    }

    static deleteTodo(req,res) {
        let id = parseInt(req.params.id);
        Todo.findByPk(id)
           .then(todo => {
                if (!todo) {
                    return res.status(404).json({ message: 'Todo not found' });
                }
                return todo.destroy()
                   .then(() => res.json({ message: 'Todo deleted successfully' }));
            })
           .catch(err => {
                res.json(err);
            });
    }

    static updateTodo(req,res) {
        let id = parseInt(req.params.id);
        Todo.findByPk(id)
           .then(todo => {
                if (!todo) {
                    return res.status(404).json({ message: 'Todo not found' });
                }
                return todo.update(req.body)
                   .then(() => res.json(todo));
            })
           .catch(err => {
                res.json(err);
            });
    }
}

module.exports = TodoController;