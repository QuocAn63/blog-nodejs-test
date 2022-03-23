const mongoose = require('mongoose');
const Course = require('../modal/Course');

class NewsController {
    // [GET] /news
    index(req, res, next) {
        Course.find({})
            .lean()
            .then((courses) => res.render('home', { courses }))
            .catch(next);
        // res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('News details');
    }
}

module.exports = new NewsController();
