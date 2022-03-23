const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 655 },
        image: { type: String, maxLength: 255 },
        video: { type: String, maxLength: 55 },
        slug: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
