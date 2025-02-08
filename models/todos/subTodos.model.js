const mongoose = require ("mongoose")

const subTodoSchema = new mongoose.Schema(
    {
        subTasks:{
            type: String,
        },
        contents:{
            type:String
        }
    },{timestamps: true})

    export const subTodos = mongoose.model("Subtodo",subTodoSchema)