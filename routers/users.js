const express = require('express')
const router = express.Router();
const userModels = require('../models/users')

router.get('/users', (req, res) => {
    userModels.find({}).then((data) => {
        res.status(200).json({
            success: 'true',
            message: 'list all user',
            status: '200',
            results: data
        })
    })
})

router.post('/users', (req, res) => {
    userModels.create(req.body, function (err) {
        if (err) {
            res.status(500).json({
                status: "error",
                status: '500',
                data: err
            })
        } else {
            res.status(200).json({
                success: 'true',
                message: 'user created successfully',
                status: '200',
            })
        }
    })
})

router.delete('/users/:id', (req, res) => {
    userModels.findByIdAndDelete({
        _id: req.params.id
    }, () => {
        res.json({
            success: 'true',
            message: 'user deleted successfully',
            status: '200'
        })
    });

})

router.put('/users/:id', (req, res) => {
    userModels.findByIdAndUpdate({
        _id: req.params.id
    }, req.body, (err, data) => {
        res.status(200).json({
            success: 'true',
            message: 'user updated successfully',
            status: '200',
        })
    })
})


module.exports = router;