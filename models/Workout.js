const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

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
    }],
    totalDuration: {
        type: Number,
        default: 0
    }
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout