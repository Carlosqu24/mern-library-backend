const mongoose = require('mongoose');

let URI = process.env.MONGODB_URI || 'mongodb://localhost/library-app'

mongoose.connect(URI, {
  
})
      .then(db => console.log('DB is connected'))
      .catch(error => console.log(error))