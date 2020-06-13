const express = require('express');
const ExpressError = require("./expressError")
const {checkNums, mean, median, mode} = require('./calculator');

const app = express();


app.get("/mean", function(req, res, next){
    try {
        if (!req.query.nums) throw new ExpressError("Nums are required!", 400);
        let numArr = req.query.nums.split(",");
        let error = checkNums(numArr);
        if (!error) {
            return res.send({ operation: "mean", value: mean(numArr) });
        }
        throw new ExpressError(error, 400);
    } catch (err) {
        return next(err);
    }
})


// 404 handler
app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
});

app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;

    // set the status and alert the user
    return res.status(status).json({
        error: {message, status}
    });
});

app.listen(3000, function () {
    console.log('App on port 3000');
})