document.addEventListener('DOMContentLoaded', () => {
    const gameList = document.getElementById('game-list');

    const games = [
        {
            title: 'Den Flotte Kagedyst',
            description: 'Create the best looking cakes!',
            link: 'DenFlotteKagedyst/index.html',
            image: 'DenFlotteKagedyst/screenshot.png'
        }
    ];

    games.forEach(game => {
        const gameLink = document.createElement('a');
        gameLink.href = game.link;
        gameLink.classList.add('game-card-link');

        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        const image = document.createElement('img');
        image.src = game.image;
        image.alt = game.title;

        const title = document.createElement('h3');
        title.textContent = game.title;

        const description = document.createElement('p');
        description.textContent = game.description;

        gameCard.appendChild(image);
        gameCard.appendChild(title);
        gameCard.appendChild(description);

        gameLink.appendChild(gameCard);
        gameList.appendChild(gameLink);
    });
});
