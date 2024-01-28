const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`Server running on port ${PORT}`);
});

app.get('/user/:username', function(req, res) {
  const username = req.params.username;
  res.send(`Hello ${username}`);
});

app.use(function(req, res, next) {
  res.status(404).send('404 - Not Found');
});
