class TodoController {
    static getAllTodos(req,res) {
    res.send('Page with all todos')
    }

    static addTodo(req,res) {
       res.send('Page to add new todo')
    }
}

module.exports = TodoController