const express = require('express')
const router = express.Router();

const Blog = require('../models/Blog');

router.get('/', async (req, res) => {
    const blogs = await Blog.find();
    res.status(200).render('blog', { 
        title: "Блог",
        blogs
    });
})

router.get('/all', async (req, res) => {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
})

router.post('/add', async (req, res) => {
    const blog = new Blog({
        time: req.body.time,
        title: req.body.title,
        img: req.body.img,
        about: req.body.about
    })
    try {
        await blog.save();
    } catch(e) {
        console.log(e);
    }
})

module.exports = router;