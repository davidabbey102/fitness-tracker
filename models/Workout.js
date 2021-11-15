const mongoose = require("mongoose")
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Name of exercise"
        },
        type: {
            type: String,
            trim: true,
            required: "Type of exercise"
        },
        duration: {
            type: Number,
            required: "Exercise duration"
        },
        weight: {
            type: Number,
            default: 0
        },
        sets: {
            type: Number,
            default: 0
        },
        reps: {
            type: Number,
            default: 0
        },
        distance: {
            type: Number,
            default: 0
        },
    }]
})

const Workout = mongoose.model("workout", WorkoutSchema)

module.exports = Workout