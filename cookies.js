// Selecting elements
const userForm = document.getElementById("userForm");
const displaySection = document.getElementById("displaySection");

// 1. Function to calculate age in months
const calculateMonths = (age) => age * 12;

// 2. Handle Form Submission
userForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get values
    const name = document.getElementById("username").value;
    const age = parseInt(document.getElementById("age").value);

    // 3. Store in localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userAge", age);

    renderContent();
    userForm.reset();
});

// 4. Function to display personalized content
function renderContent() {
    const storedName = localStorage.getItem("userName");
    const storedAge = localStorage.getItem("userAge");

    if (storedName && storedAge) {
        displaySection.style.display = "block";

        // Personalized Greeting using 
        document.getElementById("greetingSlot").innerHTML = `<h2>Welcome back, ${storedName}!</h2>`;

        // Age Calculation Display
        const months = calculateMonths(storedAge);
        document.getElementById("monthsSlot").innerText = `You are approximately ${months} months old.`;

        // Conditional Logic (Adult Content Check)
        const statusSlot = document.getElementById("ageStatusSlot");
        if (storedAge >= 18) {
            statusSlot.innerHTML = `<p style="color: green;">✔ You are old enough to access adult content.</p>`;
        } else {
            statusSlot.innerHTML = `<p style="color: brown;">✘ You are too young for adult content.</p>`;
        }

        // Loop to display motivational quote 5 times
        const quoteSlot = document.getElementById("quoteSlot");
        quoteSlot.innerHTML = ""; // Clear previous quotes
        const quote = "Small Commits, Big Impact. Don't wait for the  feature completion to feel successful. Aim for Atomic Wins - small, achievable milestones that build momentum and confidence. Celebrate each step forward, no matter how small, and watch your progress soar!";
        
        for (let i = 0; i < 5; i++) {
            const p = document.createElement("p");
            p.innerText = `${i + 1}. ${quote}`;
            p.style.fontStyle = "italic";
            quoteSlot.appendChild(p);
        }
    }
}

// Check for data on page load
window.onload = renderContent;