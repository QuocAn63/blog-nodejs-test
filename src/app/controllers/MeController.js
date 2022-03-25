const mongoose = require('mongoose');
const Course = require('../modal/Course');

class MeController {
    storedCourses(req, res, next) {
        Course.find({})
            .lean()
            .then((courses) => res.render('me/storedCourses', { courses }))
            .catch(next);
    }
}

module.exports = new MeController();
