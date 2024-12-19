const express = require('express');
const taskRouters = require("./routes/tasks");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logger = (req, res, next) => {
    console.log(`Logger: ${req.method}: Request received on ${req.url}`);
    next();
};

app.use(logger);
app.use(taskRouters);

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});


module.exports = app;