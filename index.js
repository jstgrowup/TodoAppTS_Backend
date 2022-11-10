const { connect } = require("mongoose")
const express = require('express')
const app = express()
const cors = require("cors")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8080
const connectionURL = process.env.MONGO_URI
app.use(cors())
app.use(express.json())
const { getTodos, updateTodos, postTodos, deleteTodos } = require("./controllers/controller")
app.get("/todos", getTodos)
app.post("/todos", postTodos)
app.patch("/todos/:id", updateTodos)
app.delete("/todos/:id", deleteTodos)
connect(connectionURL).then(() => app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})).catch(() => console.log("sserver error"))
