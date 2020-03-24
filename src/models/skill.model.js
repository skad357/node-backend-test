const mongoose = require('mongoose');

const { Schema } = mongoose;

const SkillSchema = new Schema({

    description: { type: String, required: true },
    type: { type: String, required: true },
    yearsExperience: { type: Number, required: true },
    developer: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        autopopulate: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment',
        required: true,
        autopopulate: true
    }]


})

SkillSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('skill',SkillSchema);