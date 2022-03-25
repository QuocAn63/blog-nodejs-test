const mongoose = require('mongoose');
const Course = require('../modal/Course');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .lean()
            .then((courses) => res.render('home', { courses }))
            .catch(next);
    }

    // [GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
