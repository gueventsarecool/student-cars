// Importing the mongoose library
const mongoose = require('mongoose');

// Creating a Schema object using mongoose
const Schema = mongoose.Schema;

// Defining a schema for a new car in MongoDB
const carSchema = new Schema({
    carName: {
        
         // carName is a required field
    },
    choose: {
        type: Boolean,
        default: false // choose defaults to false if not provided
    },
    speed: {
        
         // speed is a required field
    },
    manufactureYear: {
        
         // manufactureYear is a required field
    },
    timestamp: {
        type: String,
        default: Date.now() // timestamp defaults to the current date and time
    }
});

// Creating a Car model based on the carSchema
const Car = mongoose.model('Car', carSchema);

// Exporting the Car model for use in other parts of the application
module.exports = Car;
