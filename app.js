const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
// ROUTES
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server runNig on port ${PORT}`);
});