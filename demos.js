const express = require('express');

const app = express();
const port = process.env.PORT || 9800;

app.get('/', (req, res) => res.redirect('/demos'));

app.use(express.static(__dirname));

app.listen(port, function (err) {
  if (err) throw err;
  console.log(`Server running at http://127.0.0.1:${port}`);
});
