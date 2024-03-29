const express = require("express");
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokesRoutes = require('./routes/joke.routes');
AllMyJokesRoutes(app);

app.listen(8000 , () =>{
    console.log("The server is all fired up on port  8000");
})
