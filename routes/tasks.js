const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel');

router.get('/new', (req, res) => {
    res.render('new', {task: new Task()});
})

router.post("/", async (req, res) => {
    let task = new Task({
        title: req.body.title,
        description: req.body.description,
        reward: req.body.reward,
    })

    try {
        task = await task.save();
        res.redirect('/');
    } catch (e) {
        console.log(e);
        //window.alert("Something went wrong");
        res.render('new', {task : task});
    }
   
})

module.exports = router;