const mongoose = require('mongoose');
const Course = require('../modal/Course');

class CoursesController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) => {
                console.log(req.body);
                res.render('courses/show', { course });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const post = new Course(req.body);

        post.save((error) => {
            if (!error) {
                res.render('news');
            }
        });
    }
}

module.exports = new CoursesController();
