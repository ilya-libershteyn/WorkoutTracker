const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [{
        name: {
        type: String,
        trim: true,
        required: "Enter the name of the exercise"
        },
        type: {
            type: String,
            required: "Enter the type of exercise"
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        duration: {
            type: Number,
            required: "Enter an exercise duration in minutes"
        }
    }],
    day: {
        type: Date,
        default: () => new Date()
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
