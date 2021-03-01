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
        duration: {
            type: Number,
            required: "Enter the duration of the exercise in minutes"
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }],
    day: {
        type: Date,
        default: () => new Date()
    }
},
{
    toJSON: {
        virtuals: true
    }
});
// dynamically sums the duration value of every element in exercises
workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
