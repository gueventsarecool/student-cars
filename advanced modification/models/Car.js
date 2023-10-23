// Importing the mongoose library


// Creating a Schema object using mongoose


// Defining a schema for a new car in MongoDB
const carSchema = new Schema({
    carName: {
        
         // carName is a required field
    },
    choose: {
        
        // choose defaults to false if not provided
    },
    speed: {
        
         // speed is a required field
    },
    manufactureYear: {
        
         // manufactureYear is a required field
    },
    timestamp: {
        
        // timestamp defaults to the current date and time
    }
});

// Creating a Car model based on the carSchema


// Exporting the Car model for use in other parts of the application

