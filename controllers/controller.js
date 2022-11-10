const mongoose = require("mongoose");
const TodoModel = require("../dbTodos");
const getTodos = async (req, res) => {
    try {
        const allTodos = await TodoModel.find()
        res.send(allTodos)
    } catch (error) {
        res.status(400).send(error.message)

    }
}
const postTodos = async (req, res) => {
    const dbTodos = req.body
    try {
        const newTodos = await TodoModel.create(dbTodos)
        res.send(newTodos)
    } catch (error) {
        res.status(400).send(error.message)

    }
}
const updateTodos = async (req, res) => {
    const { id } = req.params
    console.log(id);
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).send("there is no todo with this id")

        }
      
        const updatedTodo = await TodoModel.findOneAndUpdate({ _id: id, completed: true })
        if (!updatedTodo) {
            res.status(400).send("there is no todo with this id")

        }
        res.send(updatedTodo)

    } catch (error) {
        res.status(400).send(error.message)

    }
}
const deleteTodos = async (req, res) => {
    const { id } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).send("there is no todo with this id")

        }
        const deleteTodo = await TodoModel.findByIdAndDelete({ _id: id })
        res.status(200).send(deleteTodo)
    } catch (error) {
        res.status(400).send(error.message)

    }
}
module.exports = {
    getTodos,
    postTodos,
    updateTodos,
    deleteTodos



}