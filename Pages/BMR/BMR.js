// Get DOM elements
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const ageInput = document.getElementById('age');
const genderSelect = document.getElementById('gender');
const activitySelect = document.getElementById('activityLevel');
const resultDiv = document.getElementById('result');
const bmrSpan = document.getElementById('bmrResult');
const tdeeSpan = document.getElementById('tdeeResult');

// Activity level multipliers
const ACTIVITY_MULTIPLIERS = {
    sedentary: 1.2,
    light: 1.375, 
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9
};

// Input validation
function validateInputs(weight, height, age) {
    if (!weight || !height || !age) {
        alert('Please fill in all fields');
        return false;
    }
    if (weight <= 0 || height <= 0 || age <= 0) {
        alert('Please enter valid positive numbers');
        return false;
    }
    return true;
}

// Calculate BMR using Mifflin-St Jeor Equation
function calculateBasalRate(weight, height, age, gender) {
    const base = (10 * weight) + (6.25 * height) - (5 * age);
    return gender === 'male' ? base + 5 : base - 161;
}

// Calculate TDEE based on activity level
function calculateTotalEnergy(bmr, activityLevel) {
    return bmr * ACTIVITY_MULTIPLIERS[activityLevel];
}

// Main calculation function
function calculateBMR() {
    // Get input values
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const age = parseInt(ageInput.value);
    const gender = genderSelect.value;
    const activityLevel = activitySelect.value;

    // Validate inputs
    if (!validateInputs(weight, height, age)) {
        return;
    }

    // Calculate BMR and TDEE
    const bmr = calculateBasalRate(weight, height, age, gender);
    const tdee = calculateTotalEnergy(bmr, activityLevel);

    // Display results
    bmrSpan.textContent = Math.round(bmr);
    tdeeSpan.textContent = Math.round(tdee);
    resultDiv.style.display = 'block';
}

// Add event listeners
document.querySelector('button').addEventListener('click', calculateBMR);

// Hide loading screen after 2 seconds
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
    }, 2000);
});
