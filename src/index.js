const express = require('express');
const cors = require('cors');

const { createRoles } = require("./libs/initialSetup");

// INITIALIZATIONS
const app = express();
createRoles();
require('./database');
require('dotenv').config();

// SETTINGS
app.set('port', process.env.PORT || 9000);


// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


// ROUTES
app.use('/api/books', require('./routes/books.routes'));
app.use('/api/auth', require('./routes/auth.routes'));


app.listen(app.get('port'), () => {
      console.log(`http://localhost:${app.get('port')}`);
});