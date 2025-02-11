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
