const express = require('express')
const router = express.Router();

const News = require('../models/News');

router.get('/', async (req, res) => {
    const news = await News.find();
    res.status(200).render('news', { 
        title: "Новости",
        news
    });
})

router.get('/all', async (req, res) => {
    const news = await News.find();
    res.status(200).json(news);
})

module.exports = router;