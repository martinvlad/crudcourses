const connection = require('./model')
const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

const CourseController = require('./controllers/courses')


app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({
    extended: true
})
)

app.set('views', path.join(__dirname, "/views/"))



app.engine("hbs", expressHandlebars({
    extname: "hbs",
    defaultLayout: "mainlayout",
     layoutsDir: __dirname + "/views/layouts",
     runtimeOptions: {
              allowProtoPropertiesByDefault: true,
              allowProtoMethodsByDefault: true,
            }
        
}))

app.set("view engine", "hbs")

app.get('/', (req, res) =>{
    res.render("index", {})
})


app.use("/course", CourseController)

app.listen(3000, ()=>{
    console.log("listening on port 3000...")
});