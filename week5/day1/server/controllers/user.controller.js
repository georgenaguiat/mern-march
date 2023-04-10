const { model } = require('mongoose');
const User = require('../models/user.model');

module.exports.findAllUsers = (req, res) => {
    User.find()
        .then((allDaUser) => {
            res.json({ user: allDaUser })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findAoneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => {
            res.json({ user: oneSingleUser })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
}

// ! The res is what we send back from the user and the req is what we get from the user
module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newlyCreateUser => {
            res.json({ user: newlyCreateUser })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true, runValidators: true
    })
        .then(updatedUser => {
            res.json({ user: updatedUser })
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
