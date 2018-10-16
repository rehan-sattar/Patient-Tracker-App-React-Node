const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');


const port = process.env.PORT || 8080;
// +==================== middleWare usage =================== 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


require('./dbConnection');
app.use('/doctorDashbord', routes);

// ===================== servere listening =================

app.listen(port, err => {
    if (err) {
        console.log(`Some error Occurred: ${err}`)
    };
    console.log(`Server Started on port ${port}`);
});
