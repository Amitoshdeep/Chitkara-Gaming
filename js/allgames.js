// Function to fetch the game data from the JSON file
async function fetchGamesData() {
    try {
        const response = await fetch('/js/games.json'); // Specify the correct path to the JSON file
        const games = await response.json();
        renderGames(games); // Pass the data to render the games
    } catch (error) {
        console.error('Error fetching the game data:', error);
    }
}

// Function to render the games list
function renderGames(games) {
    const gamesList = document.getElementById('gamesList');
    gamesList.innerHTML = ''; // Clear current list

    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('gameCard');

        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <figcaption><h2>${game.title}</h2></figcaption>
            <h3>Price: <span class="strike">${game.originalPrice} Rs.</span> ${game.discountedPrice} Rs.</h3>
        `;
        
        gamesList.appendChild(gameCard);
    });
}



// Function to sort games in ascending order
function sortGames(games) {
    const sortedGames = [...games].sort((a, b) => a.title.localeCompare(b.title));
    renderGames(sortedGames);
}

// Function to filter games by search input
function searchGames() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const gameCards = document.querySelectorAll('.gameCard');
    gameCards.forEach(card => {
        const title = card.querySelector('figcaption h2').textContent.toLowerCase();
        card.style.display = title.includes(input) ? 'block' : 'none';
    });
}

// Fetch the games data when the page loads
window.onload = fetchGamesData;
// window.onload = sortGames; // Call the sortGames function to sort the games initially
