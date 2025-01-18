// Hide loading screen after 2 seconds
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
    }, 2000);
});

function calculateCalories() {
    // Get input values
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    // Validate inputs
    if (!age || !weight || !height) {
        document.getElementById('result').innerHTML = 'Please fill in all fields';
        return;
    }

    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // Calculate total daily calorie needs
    const calories = Math.round(bmr * activity);

    // Display results
    const result = document.getElementById('result');
    result.innerHTML = `
        <h3>Your Daily Calorie Needs:</h3>
        <p>To maintain your current weight: ${calories} calories/day</p>
        <p>To lose weight (0.5kg/week): ${calories - 500} calories/day</p>
        <p>To gain weight (0.5kg/week): ${calories + 500} calories/day</p>
    `;
}
