const db = require("../models/Workout")
const router = require("express").Router()

router.get("/api/workouts", (req, res) => {
    db.Workout.find().then(dbData => {
        res.json(dbData)
    }).catch(err => {
        res.json(err)
    })
})

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then(dbData => {
        res.json(dbData)
    }).catch(err => {
        console.log(err)
    })
})

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find().then(dbData => {
        res.json(dbData)
    }).catch(err => {
        console.log(err)
    })
})

router.put("/api/workouts/:id", ({ body }, res) => {
    db.Workout.findByIdAndUpdate(params.id, {
        $push: { exercises: body }
    }).then(dbData => {
        res.json(dbData)
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router