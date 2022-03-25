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

        post.save()
            .then(() => res.redirect('/'))
            .catch();
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .lean()
            .then((course) => {
                console.log(course);
                res.render('courses/edit', { course });
            })
            .catch(next);
    }

    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch(next);
    }

    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
