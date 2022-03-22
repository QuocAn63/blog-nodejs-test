const mongoose = require('mongoose');
const Course = require('../modal/Course');

class NewsController {
    // [GET] /news
    index(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(404).json({ Error: 'ERROR!!!' });
            }
        });
        // res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('News details');
    }
}

module.exports = new NewsController();
