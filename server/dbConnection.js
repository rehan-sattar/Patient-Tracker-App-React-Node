const mongoose = require('mongoose');
const URL = require('./config').databaseURL;

mongoose.connect(URL, err => {
    if (err) {
        console.log(`Error while Connection : ${err}`)
    }
    console.log(`Database Connected.`);
});
