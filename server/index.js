const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});
app.listen(port, () => console.log(`You are listening at http://localhost:${port}`));
