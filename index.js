const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose')
const employeeRoute = express.Router();
let db = require("./models/")
const path = require('path');


const app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
// app.use(pino);
app.use(bodyParser.json())


mongoose.connect(process.env.MONGODB_URI ||"mongodb://127.0.0.1:27017/myDb", {
  useNewUrlParser: true
})
const connection = mongoose.connection;

connection.once('open', function () {
  console.log("MongoDB database connection established")
})

// employeeRoute.route('/').get(function (req, res) {
//   console.log("hit home route")
//   Employee.find(function (err, data) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log
//       res.json(data)
//     }
//   })
// })
employeeRoute.route('/').get(function (req, res) {
  console.log("hit home route")
  db.Employees.find({})
  .then(function(data){
    console.log
    res.json(data)
  })

})


employeeRoute.route('/detail/:id').get(function (req, res) {
  console.log("hit detail route")
  let id = req.params.id;
  console.log(id)
  // db.Employees.find({_id:'ObjectId("'+id+'")'})
  db.Employees.find({_id:id}, function(err, data){
    if (err) return res.send(err);
    console.log(data)
    res.json(data);
  })
})

employeeRoute.route('/search/:query').get(function (req, res) {
  console.log("hit search route")
  let query = req.params.query;
  console.log(query)
  // db.Employees.find({_id:'ObjectId("'+id+'")'})
  db.Employees.find({Last_Name:query}, function(err, data){
    if (err) return res.send(err);
    console.log(data)
    res.json(data);
  })
})


app.use('/api', employeeRoute)

// Serve static files from the React app
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.use(express.static(path.join(__dirname, "client", "build")))
if (process.env.NODE_ENV === 'production'){
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
}

app.listen(PORT, () =>
  console.log('Express server is running on localhost:', PORT)
);