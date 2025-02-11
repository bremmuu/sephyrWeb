const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const app = express();
const port = 3000;

// Ensure 'public/images/' directory exists for uploads
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
    destination: imagesDir,
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Serve static files (HTML, CSS, JS, images)
app.use(express.static('public'));

// Character creation endpoint
app.post('/character', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ status: 'error', message: 'Image is required' });
    }

    const { name, bio } = req.body;
    const image = `/images/${req.file.filename}`;

    res.json({ status: 'success', name, bio, image });
});

// Start server
app.listen(port, () => console.log(`✅ Server running at http://localhost:${port}`));
