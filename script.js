// script.js
async function search() {
    const searchInput = document.getElementById('searchInput').value.trim();
    const searchResults = document.getElementById('searchResults');

    // Clear previous results
    searchResults.innerHTML = '';

    if (!searchInput) {
        // If search input is empty, show a message
        searchResults.innerHTML = '<p>Please enter a search query.</p>';
        return;
    }

    try {
        // Fetch live data from the Google Dataset Search API
        const response = await fetch(`https://datasetsearch.research.google.com/api/search?query=${encodeURIComponent(searchInput)}`);
        const data = await response.json();

        if (data.results.length === 0) {
            searchResults.innerHTML = '<p>No results found.</p>';
        } else {
            data.results.forEach(item => {
                const resultItem = document.createElement('div');
                resultItem.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a>`;
                searchResults.appendChild(resultItem);
            });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        searchResults.innerHTML = '<p>Oops! Something went wrong. Please try again later.</p>';
    }
}
