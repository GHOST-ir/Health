// Hide loading animation after 2 seconds
setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
}, 2000);


function calculateBodyFat() {
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const neck = parseFloat(document.getElementById('neck').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const hip = parseFloat(document.getElementById('hip').value);
    const result = document.getElementById('result');

    if (gender === 'male') {
        const bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
        result.textContent = `Your estimated body fat percentage is: ${bodyFat.toFixed(1)}%`;
    } else {
        const bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
        result.textContent = `Your estimated body fat percentage is: ${bodyFat.toFixed(1)}%`;
    }
}

// Show/hide hip measurement field based on gender selection
document.getElementById('gender').addEventListener('change', function() {
    const hipGroup = document.getElementById('hip-group');
    hipGroup.style.display = this.value === 'female' ? 'block' : 'none';
});
