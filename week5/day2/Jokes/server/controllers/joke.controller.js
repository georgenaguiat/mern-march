const { model } = require('mongoose');
const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json(allJokes);
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        })

}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyJoke => {
            res.json(newlyJoke);
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json(oneSingleJoke);
        })
        .catch(err => {
            res.json({ messsage: 'Something went wrong', error: err })
        });
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true, runValidators: true
    })
        .then(updateJoke => {
            res.json(updateJoke);
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        })
}

module.exports.deleteExistingJoke = (req, res) => {
    Joke.findOneAndDelete({ _id: req.params.id })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        });
}