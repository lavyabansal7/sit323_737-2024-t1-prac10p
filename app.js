// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route to serve the homepage
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Dockerized Web Application!</h1>');
});

// Start the server
const port = process.env.PORT || 8037;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
