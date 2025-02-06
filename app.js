// Select buttons and content div
const homeButton = document.getElementById('homeButton');
const aboutButton = document.getElementById('aboutButton');
const contactButton = document.getElementById('contactButton');
const content = document.getElementById('content');

// Event listeners for buttons
homeButton.addEventListener('click', () => {
    content.innerHTML = `
        <h1>Welcome to the Welsh Fantasy World</h1>
        <p>Click the buttons to explore different sections of this world.</p>
    `;
});

aboutButton.addEventListener('click', () => {
    content.innerHTML = `
        <h1>About</h1>
        <p>This is a personal project focused on fantasy world-building, using Welsh language elements.</p>
    `;
});

contactButton.addEventListener('click', () => {
    content.innerHTML = `
        <h1>Contact</h1>
        <p>For more information, reach out to us via email at info@sephyrweb.com</p>
    `;
});
