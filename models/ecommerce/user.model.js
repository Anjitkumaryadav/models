const mongoose = require ("mongoose")

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            reuqired: true,
            unique: true,
            lowercase: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password:{
            type: String,
            required: true,
        },

    }, {timestamps:true})

    export const User = mongoose.model("User",userSchema)