class TodoController {

    static getAllTodos(req,res) {
        const arrObjeck = [
            {
                id: 1,
                title: 'Task 1',
                completed: false
            },
            {
                id: 2,
                title: 'Task 2',
                completed: true
            }
        ]
        res.json(arrObjeck)
    }

    static addTodo(req,res) {
        res.json({
            message: 'pages Todos add',
        })
    }
}

module.exports = TodoController