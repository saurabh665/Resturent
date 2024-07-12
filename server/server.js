const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 1001;

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON bodies

mongoose.connect('mongodb://27017/Data', {

}).then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.error('Connection failed:', error); 
});

// Define a schema for user data
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// POST endpoint to handle user creation
app.post('/users', async (req, res) => {
    try {
        const userData = req.body; // Assuming req.body contains username, email, and password
        const newUser = new User(userData); // Create a new instance of User model
        await newUser.save(); // Save the user to MongoDB
        res.status(201).json(newUser); // Respond with the saved user data
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors if save fails
    }
});

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
