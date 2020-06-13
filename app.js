const express = require('express');

const app = express();

app.get('/api/staff/:fname', function(req, res) {
    return res.status(404).json({ fname: req.params.fname });
  });

app.listen(3000, function () {
  console.log('App on port 3000');
})