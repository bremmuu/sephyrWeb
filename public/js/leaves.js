document.addEventListener("DOMContentLoaded", function () {
    const leafContainer = document.getElementById("falling-leaves");

    function createLeaf() {
        const leaf = document.createElement("div");
        leaf.classList.add("leaf");

        // Adjusted random size (min: 40px, max: 80px)
        const size = Math.random() * 40 + 40;
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;

        // Random position and animation timing
        leaf.style.left = Math.random() * 100 + "vw";
        const duration = Math.random() * 3 + 3; // Between 3s and 6s
        leaf.style.animationDuration = `${duration}s`;

        leafContainer.appendChild(leaf);

        // Ensure fade-out starts before removal
        setTimeout(() => {
            leaf.style.transition = "opacity 1.5s ease-out";
            leaf.style.opacity = "0";
        }, duration * 1000 - 1500); // Start fading 1.5s before the end

        // Remove the leaf after it's fully faded out
        setTimeout(() => {
            leaf.remove();
        }, duration * 1000);
    }

    // Create leaves at intervals
    setInterval(createLeaf, 500);
});
