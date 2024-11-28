function navigateToHomepage() {
    window.location.href = "index.html";
}

function navigateToQuiz() {
    window.location.href = "quiz.html";
}

function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

document.addEventListener('DOMContentLoaded', () => {
    // Quotes Rotator
    const quotes = document.querySelectorAll('.quote'); // Select all quotes
    let currentIndex = 0; // Start with the first quote

    if (quotes.length > 0) { // Ensure there are quotes to display
        function showNextQuote() {
            quotes[currentIndex].classList.remove('active'); // Hide the current quote
            currentIndex = (currentIndex + 1) % quotes.length; // Move to the next quote
            quotes[currentIndex].classList.add('active'); // Show the next quote
        }

        quotes[currentIndex].classList.add('active'); // Display the first quote initially
        setInterval(showNextQuote, 4000); // Cycle through quotes every 4 seconds
    }
});

    document.addEventListener("DOMContentLoaded", () => {
        const dynamicImg = document.getElementById("dynamic-img"); // Dynamic image element
        const images = [
            "trans1.png", // Replace with your dynamic image paths
            "trans2.png",
            "trans3.png",
            "trans4.png",
        ];
    
        let index = 0; // Start with the first image
    
        // Function to switch the dynamic image
        function switchImage() {
            // Add fade-out effect
            dynamicImg.style.transition = "opacity 0.5s ease-in-out";
            dynamicImg.style.opacity = 0; // Fade out
            dynamicImg.parentElement.style.backgroundColor = "#3FA559";
    
            setTimeout(() => {
                // Change the image source after fade-out
                index = (index + 1) % images.length; // Cycle to the next image
                dynamicImg.src = images[index];
                dynamicImg.style.opacity = 1; // Fade back in
            }, 500); // Wait for fade-out duration
        }
    
        // Change image every 3 seconds
        setInterval(switchImage, 3000);
    });
