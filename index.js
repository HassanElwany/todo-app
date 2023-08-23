import express from 'express';

import bodyParser from 'body-parser';



const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))



app.get("/", (req,res) => {
    res.render("index.ejs", { todos })
})



let todos = [];

app.post("/submit", (req, res) => {
    const inputText = req.body.inputText
    if(inputText){
        todos.push(inputText)
    }
    res.render("index.ejs", {todos})
})

app.listen(port)