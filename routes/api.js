const db = require("../models/Workout")
const router = require("express").Router()

router.get("/api/workouts", (req, res) => {
    db.find({}).then(dbData => {
        dbData.forEach(workout =>{
            let total = 0
            workout.exercises.forEach(e=>{
                total += e.duration
            })
            workout.totalDuration = total
        })
    }).catch(err => {
        res.json(err)
    })
})

router.post("/api/workouts", ({ body }, res) => {
    db.create(body).then(dbData => {
        res.json(dbData)
    }).catch(err => {
        console.log(err)
    })
})

router.get("/api/workouts/range", (req, res) => {
    db.find({}).then(dbData => {
        res.json(dbData)
    }).catch(err => {
        console.log(err)
    })
})

router.put("/api/workouts/:id", ({ body }, res) => {
    db.findByIdAndUpdate(params.id, {
        $push: { exercises: body }
    }).then(dbData => {
        res.json(dbData)
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router