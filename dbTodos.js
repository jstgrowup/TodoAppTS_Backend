const { Schema, model } = require("mongoose")

const TodoSchema = new Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, required: true }
})
const TodoModel = model("todos", TodoSchema)
module.exports = TodoModel 