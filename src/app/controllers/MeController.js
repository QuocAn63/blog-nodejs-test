const mongoose = require('mongoose');
const Course = require('../modal/Course');

class MeController {
    storedCourses(req, res, next) {
        const courses = Course.find({})
            .sort({ [req.query.by]: req.query.order })
            .lean();

        Promise.all([courses, Course.countDocumentsDeleted()]).then(
            ([courses, counted]) =>
                res.render('me/storedCourses', { courses, counted }),
        );
    }

    trashCourses(req, res, next) {
        Course.findDeleted()
            .lean()
            .then((courses) => res.render('me/trashCourses', { courses }))
            .catch(next);
    }
}

module.exports = new MeController();
