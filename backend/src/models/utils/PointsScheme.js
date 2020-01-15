const monogoose = require('mongoose')

const PointSchema = new monogoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
})

module.exports = PointSchema