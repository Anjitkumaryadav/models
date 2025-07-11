const mongoose = require("mongoose")

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    addressLine2:{
        type:String,
        required: true,
    },
    city:{
        type: String,
        required: true
    },
    pincode:{
        type: String,
        required: true
    },
    specialized: [
        {
        type:String,
        }
    ]
},{timestamps:true})

export const Hospital = mongoose.model("Hospital",hospitalSchema)