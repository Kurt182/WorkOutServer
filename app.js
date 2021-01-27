// require("dotenv").config();
let express = require("express");
const app = express();
const sequelize = require('./db');
let user = require('./controllers/usercontroller');

sequelize.sync();

// app.use(require('./middleware/headers'));

// app.use(express.json());


/* ******************
  * Exposed Route *
*********************/
app.use('/user', user);


/* ******************
  * Protected Route *
*********************/
app.use('/workOutLog', require('./controllers/logController'));
app.listen(3000, function () {
    console.log("App is listening on port 3000");
});