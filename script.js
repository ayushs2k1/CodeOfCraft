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
    const quotes = document.querySelectorAll('.quote'); // Select all quotes
    let currentIndex = 0; // Start with the first quote

    if (quotes.length > 0) { // Ensure there are quotes to display
        // Function to show the next quote
        function showNextQuote() {
            // Hide the current quote
            quotes[currentIndex].classList.remove('active');
            
            // Move to the next quote
            currentIndex = (currentIndex + 1) % quotes.length;

            // Show the next quote
            quotes[currentIndex].classList.add('active');
        }

        // Display the first quote initially
        quotes[currentIndex].classList.add('active');

        // Set an interval to cycle through quotes every 4 seconds
        setInterval(showNextQuote, 4000);
    }
});