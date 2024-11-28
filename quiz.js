const questions = [
    {
        text: "When you hear about artisans’ struggles—such as managing tight deadlines or balancing work with family needs—how do you respond?",
        options: [
            "[A] I acknowledge their challenges but recognize these as common aspects of business operations.",
            "[B] I feel concerned but often focus on project delivery due to the constraints of my role.",
            "[C] I empathize with their challenges and look for ways within my capacity to ease their burden.",
            "[D] I feel deeply moved and actively strategize to mitigate such challenges wherever possible."
        ]
    },
    {
        text: "How do you approach artisans’ emotional well-being when working on tight deadlines or unexpected challenges?",
        options: [
            "[A] I focus on project goals and assume they can manage stress as part of their work.",
            "[B] I feel concerned but don’t have the capacity or tools to address their well-being.",
            "[C] I try to check in with them and adjust expectations when possible.",
            "[D] I actively prioritize creating a supportive environment, even under tight deadlines."
        ]
    },
    {
        text: "How do you respond when artisans express personal or cultural values that may differ from your own?",
        options: [
            "[A] I acknowledge their values but focus on aligning them with operational needs.",
            "[B] I listen to their perspectives but may not incorporate them into my decisions.",
            "[C] I respect their values and adapt my approach to find common ground.",
            "[D] I celebrate their perspectives and look for ways to integrate them into our practices."
        ]
    },
    {
        text: "How well do you understand the systemic barriers artisans face, such as limited market access or insufficient resources?",
        options: [
            "[A] I have a general awareness but do not engage with these issues directly in my role. ",
            "[B] I am aware of these barriers and consider them occasionally when relevant to my work.",
            "[C] I make an effort to understand these barriers and use that knowledge to inform my decisions.",
            "[D] I actively study these barriers to identify actionable and systemic solutions."
        ]
    },
    {
        text: "How do you approach the challenge of balancing short-term business needs with artisans’ long-term sustainability?",
        options: [
            "[A] I focus on immediate goals and believe others address long-term concerns.",
            "[B] I consider sustainability when it’s directly relevant to my role.",
            "[C] I actively explore ways to balance immediate and long-term impacts in my work.",
            "[D] I ensure all actions I take align with both short-term goals and long-term artisan sustainability."
        ]
    },
    {
        text: "How much do you involve artisans in discussions about systemic challenges that impact their work?",
        options: [
            "[A] I rely on intermediaries or existing frameworks to address systemic issues.",
            "[B] I consider their input occasionally but primarily focus on operational tasks.",
            "[C] I seek their input when addressing broader systemic challenges in projects.",
            "[D] I actively engage artisans in discussions to co-develop solutions for systemic issues."
        ]
    },
    {
        text: "When collaborating with artisans, how much importance do you place on their input in your job function?",
        options: [
            "[A] I prioritize technical and logistical aspects over creative collaboration.",
            "[B] I involve artisans when needed but focus primarily on meeting production goals.",
            "[C] I value their creative input and seek to align it with project objectives.",
            "[D] I ensure artisans are active contributors, shaping the creative direction collaboratively."
        ]
    },
    {
        text: "How do you build trust and rapport with artisans in your role?",
        options: [
            "[A] I focus on tasks and let intermediaries or frameworks handle relationship-building.",
            "[B] I establish rapport when necessary but don’t prioritize it in my role.",
            "[C] I take steps to build trust with artisans, especially during key collaborations.",
            "[D] I actively nurture relationships, ensuring artisans feel valued and respected."
        ]
    },
    {
        text: "When disagreements arise between artisans and brand teams, how do you approach resolution?",
        options: [
            "[A] I leave resolution to those directly involved and focus on my tasks.",
            "[B] I provide input if asked but don’t actively participate in resolving conflicts.",
            "[C] I engage with both sides to understand their perspectives and suggest compromises.",
            "[D] I mediate conflicts and ensure all parties feel heard, aiming for a collaborative solution."
        ]
    },
    {
        text: "How do you ensure artisans are compensated fairly for their work?",
        options: [
            "[A] I trust that the existing systems ensure fair wages and feel limited in my ability to influence this.",
            "[B] I support fair pay initiatives when brought to my attention.",
            "[C] I actively address and advocate for wage concerns whenever they arise.",
            "[D] I proactively monitor and ensure fair compensation as a core priority in my work"
        ]
    },
    {
        text: "How do you ensure artisans have access to resources or opportunities to grow professionally?",
        options: [
            "[A] I assume external stakeholders or frameworks address this area.",
            "[B] I provide support when asked but do not actively seek opportunities for them.",
            "[C] I look for ways to connect artisans with growth opportunities through my role.",
            "[D] I actively advocate for creating and supporting programs to enhance artisans’ professional development."
        ]
    },
    {
        text: "How do you ensure artisans feel valued and recognized for their contributions?",
        options: [
            "[A] I trust the existing processes for recognition and don’t focus on this area in my job role.",
            "[B] I express appreciation occasionally when the opportunity arises.",
            "[C] I regularly acknowledge their contributions and look for ways to highlight them.",
            "[D] I proactively create systems or initiatives to ensure artisans feel respected and valued."
        ]
    },
];

const backgrounds = [
    "url('quizbkg1.png')",
    "url('quizbkg2.png')",
    "url('quizbkg3.png')",
    "url('quizbkg4.png')",
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const buttonContainer = document.getElementById("button-container");
    const quizSection = document.getElementById("quiz-section");
    const loadingScreen = document.getElementById("loading-screen");

    // Ensure the questionnaire section is visible
    quizSection.style.display = "block";
    loadingScreen.style.display = "none";

    // Clear previous content
    questionContainer.innerHTML = "";
    buttonContainer.innerHTML = "";

    // Update background image in a round-robin manner
    const backgroundIndex = currentQuestionIndex % backgrounds.length;
    document.body.style.backgroundImage = backgrounds[backgroundIndex];

    // Display the current question
    const question = questions[currentQuestionIndex];
    const questionElement = document.createElement("h2");
    questionElement.textContent = question.text;
    questionContainer.appendChild(questionElement);

    // Create buttons for each option
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option-button";
        button.onclick = () => {
            score += index + 1; // Calculate score
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion(); // Load next question
            } else {
                showLoadingScreen(); // Show loading screen after the last question
            }
        };
        buttonContainer.appendChild(button);
    });
}

function showLoadingScreen() {
    const quizSection = document.getElementById("quiz-section");
    const loadingScreen = document.getElementById("loading-screen");

    // Hide the quiz section and show the loading screen
    quizSection.style.display = "none";
    loadingScreen.style.display = "flex";
    loadingScreen.style.flexDirection = "column";
    loadingScreen.style.justifyContent = "center";
    loadingScreen.style.alignItems = "center";

    // Animate the loading dots
    let dots = 0;
    const loadingDots = document.getElementById("loading-dots");
    const loadingInterval = setInterval(() => {
        dots = (dots + 1) % 4;
        loadingDots.textContent = ".".repeat(dots);
    }, 500);

    setTimeout(() => {
        clearInterval(loadingInterval);
        redirectBasedOnScore();
    }, 3000);
}

function redirectBasedOnScore() {
    let resultPage = "";
    if (score >= 12 && score <= 21) {
        resultPage = "growth-catalyst.html";
    } else if (score >= 22 && score <= 33) {
        resultPage = "partnership-architect.html";
    } else if (score >= 34 && score <= 41) {
        resultPage = "cultural-custodian.html";
    } else if (score >= 42 && score <= 48) {
        resultPage = "systems-weaver.html";
    }
    window.location.href = resultPage;
}

// Start the quiz
document.addEventListener("DOMContentLoaded", () => {
    const quizSection = document.getElementById("quiz-section");
    const loadingScreen = document.getElementById("loading-screen");

    // Ensure the quiz section is visible at the start
    quizSection.style.display = "block";
    loadingScreen.style.display = "none";

    // Load the first question
    loadQuestion();
});