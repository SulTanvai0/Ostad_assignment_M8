const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/Routes/api');

const app = new express();

//app security middleware import
const rateLimit  = require('express-rate-limit')
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize')
const hpp = require('hpp')
const cors = require('cors');

const {
  createCollection,
  removeCollection,
  insertDocument,
  deleteDocument,
} = require('./Query');

//app security middleware implement 
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp())
app.use(cors())
app.use('/api/v1',router);




//mongoDB connection 
const mongoURI = 'mongodb://127.0.0.1:27017/'; 
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Example 1: Create a new collection
createCollection();

// Example 2: Remove a collection
removeCollection();

// Example 3: Insert a document
insertDocument();

// Example 4: Delete a document
deleteDocument();







//undefined route
app.use('*' , (req , res)=>{
    res.status(404).json({status: "Fail" , data : "Not Found"})
})
module.exports = app ;