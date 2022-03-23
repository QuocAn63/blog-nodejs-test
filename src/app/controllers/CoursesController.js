const mongoose = require('mongoose');
const Course = require('../modal/Course');

class CoursesController {
    show(req, res, next) {
        Course.findOne({ path: req.params.slug })
            .lean()
            .then((course) => {
                console.log(req.params.slug);
                console.log(course.path);
                res.json(course);
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
