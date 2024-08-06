document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchBox = document.getElementById('searchBox');
    const searchResults = document.getElementById('searchResults');
    const nextButton = document.getElementById('nextButton');

    searchButton.addEventListener('click', function() {
        const query = searchBox.value.trim();
        if (query) {
            performSearch(query);
        }
    });

    // Perform search using a public API
    function performSearch(query) {
        const apiKey = 'YOUR_API_KEY'; // Replace with your real API key
        const searchEngineId = 'YOUR_SEARCH_ENGINE_ID'; // Replace with your real search engine ID
        const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${searchEngineId}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayResults(data);
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
                searchResults.innerHTML = '<p>Error fetching search results.</p>';
            });
    }

    function displayResults(data) {
        searchResults.innerHTML = ''; // Clear previous results

        if (data.items && data.items.length > 0) {
            data.items.forEach(item => {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';
                resultItem.innerHTML = `
                    <a href="${item.link}" target="_blank">${item.title}</a>
                    <p>${item.snippet}</p>
                `;
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.innerHTML = '<p>No results found.</p>';
        }
    }

    // Optional: Implement functionality for 'Next' button
    nextButton.addEventListener('click', function() {
        // Logic for handling "Next" button, if needed
        alert('Next button clicked! Implement pagination or additional functionality here.');
    });
});
