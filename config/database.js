var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/javascriptNote', {
  useUnifiedTopology: true
}
).then(() => console.log('Connection succesfull'))
  .catch((err) => console.error(err)); 