const mongoose = require('mongoose');


const Schema = mongoose.Schema(
{
    courseName:{
        type: String,
        required: "Required"
    },
    courseID:{
        type: String
    },
    courseDuration: {
        type: String
    },
    courseFee: {
        type: String
    },
},
{
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },})

mongoose.model("Courses", Schema)