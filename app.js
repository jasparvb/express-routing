const express = require('express');

const app = express();


app.get("/mean", function(req, res, next){
    try {
      const user = USERS.find(u => u.username === req.params.username);
      if (!user) throw new ExpressError("Not found!", 404);
      return res.json({ user });
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