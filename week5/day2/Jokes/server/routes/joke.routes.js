const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.get('/api/jokes/:id', JokeController.findSingleJoke);
    app.put('/api/jokes/:id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/:id', JokeController.deleteExistingJoke);
}