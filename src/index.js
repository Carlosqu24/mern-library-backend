const express = require('express');

const cors = require('cors');


// INITIALIZATIONS
const app = express();
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


app.listen(app.get('port'), () => {
      console.log(`http://localhost:${app.get('port')}`);
});