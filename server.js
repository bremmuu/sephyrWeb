const express = require('express');
const path = require('path');
const multer = require('multer');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse form data

// Set up multer storage for images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public', 'images')); // Save images to the 'images' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Use a unique filename
    }
});
const upload = multer({ storage: storage });

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Character creation route (POST request)
app.post('/character', upload.single('image'), (req, res) => {
    const { name, bio } = req.body;
    const image = req.file ? `/images/${req.file.filename}` : null;

    // Store character information (for now, we'll just return it as a response)
    res.json({
        status: 'success',
        name: name,
        bio: bio,
        image: image
    });

    // You could store this in a database for persistence in the future
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
