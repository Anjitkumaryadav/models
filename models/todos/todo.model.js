const mongoose = require ('mongoose');

const todo = new mongoose.Schema(
    {
        taskName:{
            type: String,
            require: true,
        },
        task:{
            type: String,
            require: true
        },
        discription:{
            type: String,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            },
        ],
    }, {timestamps: true})

    export const todos = mongoose.model("Todo", todo)