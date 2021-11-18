const db = require("../models/Workout")
const router = require("express").Router()

// router.get("/api/workouts", (req, res) => {
//     db.find({}).then(dbData => {
//         dbData.forEach(workout => {
//             let total = 0
//             workout.exercises.forEach(e => {
//                 total += e.duration
//             })
//             workout.totalDuration = total
//         })
//     }).catch(err => {
//         res.json(err)
//     })
// })

router.get("/api/workouts/", (req, res) => {
    db.aggregate(
        [
            {
                $match: {}
            }, {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" }
                }
            }
        ],
        (err, data) => {
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        }
    )
})

router.post("/api/workouts", ({ body }, res) => {
    db.create(body).then(dbData => {
        res.json(dbData)
    }).catch(err => {
        console.log(err)
    })
})

router.get("/api/workouts/range", (req, res) => {
    db.aggregate(
        [
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" }
                }
            }
        ])
        .sort({_id: -1})
        .limit(7) 
        .then(dbData => {
            res.json(dbData)
        }).catch(err => {
            console.log(err)
        })
})



router.put("/api/workouts/:id", (req, res) => {
    db.updateOne(
        { _id: req.params.id },
        {
            $push: { exercises: req.body }
        }).then(dbData => {
            res.json(dbData)
        }).catch(err => {
            console.log(err)
        })
})

module.exports = router