🌿 sephyrWeb

A simple fantasy world-building web application featuring character registration.
📖 Overview

sephyrWeb is a lightweight web project designed for world-building, inspired by Welsh themes. Users can create and register their own characters with names, images, and biographies.
🚀 Features

    📝 Create characters (name, biography, and image upload)
    🎨 Minimalist UI for easy navigation
    💾 Express.js backend for handling character submissions
    🗂️ File uploads with Multer to store images

🛠️ Project Structure

sephyrWeb/
│── public/           # Publicly accessible files
│   ├── images/       # Uploaded character images
│   ├── css/          # Stylesheets
│   │   ├── style.css
│   ├── js/           # Client-side JavaScript
│   │   ├── app.js
│   ├── index.html    # Main HTML file
│── server.js         # Express.js backend server
│── package.json      # Project dependencies
│── yarn.lock         # Dependency lockfile
│── README.md         # Project documentation
│── .gitignore        # Files to ignore (e.g., node_modules, images)
│── node_modules/     # Installed dependencies

🔧 Installation & Setup
1️⃣ Clone the Repository

git clone https://github.com/your-username/sephyrWeb.git
cd sephyrWeb

2️⃣ Install Dependencies

Using Yarn:

yarn install

Or with npm:

npm install

3️⃣ Run the Server

node server.js

Server will start at http://localhost:3000
📜 How to Use

    Open http://localhost:3000 in your browser.
    Click "Create Character" to open the registration form.
    Enter a character name, upload an image, and write a biography.
    Submit the form to register your character.

📌 To-Do List / Future Plans

Store character data in a database instead of just returning JSON
Add an edit/delete feature for registered characters
Improve frontend design & UI components

    Implement authentication (so users can manage their own characters)

🤝 Contributing

Feel free to fork this repository and submit pull requests! If you have suggestions or find any issues, open an issue in the repository.
⚖️ License

This project is open-source and licensed under the MIT License.