const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CoursesController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id/restore', courseController.restore);
router.post('/handle-submit-courses', courseController.handleSubmit);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete);
router.delete('/:id/forced', courseController.forcedDelete);
router.get('/:slug', courseController.show);

module.exports = router;
