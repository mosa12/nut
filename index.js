// script.js
function searchInfo() {
    // Get user input
    const userInput = document.getElementById('searchInput').value;

    // TODO: Perform AJAX request to the backend with the user input

    // Placeholder for demonstration
    const results = [
        { name: 'Apple', nutrients: { vitaminC: '10mg', fiber: '5g' }, diseases: ['Diabetes'], suitableDiseases: ['Common cold'] },
        // Add more results as needed
    ];

    // Display results dynamically
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.innerHTML = `<h2>${result.name}</h2>`;
        resultElement.innerHTML += `<p>Nutrients: ${JSON.stringify(result.nutrients)}</p>`;
        resultElement.innerHTML += `<p>Diseases not suitable: ${JSON.stringify(result.diseases)}</p>`;
        resultElement.innerHTML += `<p>Diseases suitable: ${JSON.stringify(result.suitableDiseases)}</p>`;
        resultContainer.appendChild(resultElement);
    });
}
