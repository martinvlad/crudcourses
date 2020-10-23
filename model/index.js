const mongoose = require('mongoose');
const express = require('express');


mongoose.connect('mongodb://localhost:27017/MartinVlad', {useNewUrlParser: true,  useUnifiedTopology: true }, error =>{
    if(!error){
        console.log('Everything running successfully')
    }
    else{
        console.log('The error is ' + error)
    }
})

const Course = require('./course.model')