const express = require('express');
const path = require("path");

const app = express();
const port = 3000;

// app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    const options = {
        root: path.join(__dirname)
    };
    res.sendFile("index.html", options, function (err) {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', "index.html");
        }
    });
    // res.send('Welcome to my server!');
    // res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});