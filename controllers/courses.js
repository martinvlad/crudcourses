const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CourseModel = mongoose.model("Courses");

router.post('/add', (req, res) =>{
    try{
        var newpost = new CourseModel();
        newpost.courseName = req.body.courseName;
        newpost.courseDuration = req.body.courseDuration;
        newpost.courseID = Math.ceil(Math.random()* 10000);
        newpost.courseFee = req.body.courseFee;
        newpost.save();
        res.redirect('/course/list')
    }
    catch(error){
console.log(error)
    }
    
})


router.get('/add', (req, res)=>{
    res.render('addcourse')
})

router.get('/list', (req, res) =>{


    
    CourseModel.find((err,docs)=> {
        if(!err){
            res.render("list",{data:  docs  })
            
        }
        else{
            console.log("Try again")
        }
    })
    
})

module.exports = router;