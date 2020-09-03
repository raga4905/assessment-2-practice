const Todo = require('../models/todo');


module.exports = {
    index, 
    show,
    new: newTodo,
    create
};

function index(req, res) {
    res.render('todos/index', {
        todos: Todo.getAll()
    });
}


function show(req, res) {
    res.render('todos/show', {
        todo: Todo.getOne(req.params.id),
        todoNum: req.params.id
    })
}

function newTodo(req, res) {
    res.render('todos/new')
}

function create(req, res) {
    Todo.create(req.body);
    res.redirect('/todos')
}