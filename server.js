const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/theNews'));
app.use(cors());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/theNews/index.html'));
})
app.listen(process.env.PORT || 3000);