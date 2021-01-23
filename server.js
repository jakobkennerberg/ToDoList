const express = require('express');
const mongoose = require('mongoose');
const taskRouter = require('./routes/tasks');
const Task = require('./models/taskModel');
const app = express(); 
require('dotenv/config');

try {
    mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true }, () => {
        console.log("Connected to DB");
    });
} catch (e){
    console.log("Could not connect to DB");
}


app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: false })); //To be able to access form data

app.use('/clientside', express.static('clientside'));
app.use('/tasks', taskRouter);


app.get('/', async (req, res) => {
    const tasks = await Task.find().sort({createdAt: 'desc'});
    res.render('index', {tasks: tasks});
});

app.listen(3000);

