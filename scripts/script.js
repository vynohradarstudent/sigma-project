$(document).ready(async function () {
    let games = await getAllGames()
    $(".games").empty();

    games.forEach(function (game) {
        let gameHTML = `
                    <div class="game">
                        <img src="${game.titleImageUrl}" alt="${game.title}">
                        <h2>${game.title}</h2>
                        <p>Ціна: ${game.price} грн</p>
                    </div>
                `;
        $(".games").append(gameHTML);
    });
})