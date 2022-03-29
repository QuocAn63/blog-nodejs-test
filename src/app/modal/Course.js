const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 655 },
        image: { type: String, maxLength: 255 },
        video: { type: String, maxLength: 55 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

mongoose.plugin(slug);
mongoose.plugin(mongoose_delete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);
