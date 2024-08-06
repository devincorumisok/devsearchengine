// script.js

// Get references to the input field and search button
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');

// Sample data (you can replace this with your actual data)
const sampleData = [
    { title: 'Apple', url: 'https://www.apple.com' },
    { title: 'GitHub', url: 'https://github.com' },
    // Add more sample data here
];

// Event listener for the search button
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
        const filteredResults = sampleData.filter(item =>
            item.title.toLowerCase().includes(query)
        );

        displayResults(filteredResults);
    } else {
        // Clear results if search field is empty
        displayResults([]);
    }
});

// Display search results
function displayResults(results) {
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    results.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
        resultsContainer.appendChild(resultItem);
    });
}
