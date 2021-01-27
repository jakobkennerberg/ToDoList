const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel');

router.use('/clientside', express.static('clientside'));

router.get('/new', (req, res) => {
    res.render('new', {task: new Task()});
})

router.get('/edit/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.render('edit', {task: task});
})

router.get('/:id', async (req, res) => {
    const list = await Task.find().sort({createdAt: 'desc'});
    const task = await Task.findById(req.params.id);
    res.render('modal', {list: list, task: task});
})

router.post("/", async (req, res, next) => {
    req.task = new Task();
    next();
}, saveTask('new'))

router.put('/:id', async (req, res, next) => {
    req.task = await Task.findById(req.params.id);
    next();
}, saveTask('edit'))

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
})

function saveTask(path) {
    return async (req, res) => {
        let task = req.task
        task.title = req.body.title,
        task.description = req.body.description,
        task.reward = req.body.reward

        try {
            task = await task.save();
            res.redirect('/');
        } catch (e) {
            console.log(e);
            //window.alert("Something went wrong");
            res.render(`${path}`, {task : task});
        }
    }

}

module.exports = router;