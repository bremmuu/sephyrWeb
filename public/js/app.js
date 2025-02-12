document.getElementById('create-character-btn').addEventListener('click', () => {
    document.getElementById('character-modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('character-modal').style.display = 'none';
});

// Handle form submission
document.getElementById('character-form-element').onsubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    try {
        const response = await fetch('/character', { method: 'POST', body: formData });
        const data = await response.json();

        if (data.status === 'success') {
            alert('Character created successfully!');
            event.target.reset();
            document.getElementById('character-modal').style.display = 'none';
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error creating character.');
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("synopsis");
    const discoverLink = document.querySelector(".discover-link");
    const fullText = textElement.innerHTML.trim(); // Preserve original text
    const textArray = fullText.split(""); // Convert text to an array of characters
    let i = 0;
    let typingFinished = false;
    let typingInterval;

    function typeWriter() {
        if (i < textArray.length) {
            let char = textArray[i];

            // Detect and insert full <br> tag when found
            if (char === "<" && textArray.slice(i, i + 4).join("") === "<br>") {
                textElement.innerHTML += "<br>";
                i += 4; // Skip over "<br>"
            } else {
                textElement.innerHTML += char;
                i++;
            }

            let delay = (char === '.' || char === ',' || char === '—' || char === '-' ? 30 : 10);
            typingInterval = setTimeout(typeWriter, delay);
        } else {
            typingFinished = true;
            discoverLink.style.display = "inline-block"; // Show link after typing completes
            textElement.appendChild(document.createElement("br")); // Add space
            textElement.appendChild(discoverLink); // Append link below text
        }
    }

    document.querySelector(".synopsis-container").addEventListener("mouseenter", function () {
        if (!typingFinished) {
            clearTimeout(typingInterval); // Stop previous typing calls
            textElement.innerHTML = ""; // Reset text
            i = 0;
            textElement.style.opacity = "1"; // Ensure text is visible
            typeWriter();
        }
    });

    document.querySelector(".synopsis-container").addEventListener("mouseleave", function () {
        if (!typingFinished) {
            clearTimeout(typingInterval); // Stop current typing effect
            textElement.innerHTML = ""; // Clear text if the user leaves mid-animation
            i = 0;
        }
    });
});




