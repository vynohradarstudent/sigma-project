$(document).ready(async function () {

    let token = {
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken")
    };

    $(".game-editor").hide();
    $("#save-game-button").hide();

    $(".back").click(() => {
        $(".ban").hide();
        $(".games").hide();
        $(".actions").show();
    });

    $(".ban-button").click(() => {
        $(".actions").hide();
        $(".ban").show();
    });

    $(".games-button").click(async () => {
        $(".actions").hide();
        $(".games").show();
        $(".game-editor").hide();
        $("#save-game-button").hide();
        $(".games-list").empty();
        let instruction = `<h2>Оберіть гру для редагування:</h2>`;
        $(".games-list").append(instruction);
        let games = await getAllGames();
        games.forEach(game => {
            let gameElement = `<button class="game" data-id="${game.id}">${game.title}</button>`;
            $(".games-list").append(gameElement);
        });

        $(".game").click(async function () {
            let gameId = $(this).data("id");
            let gameData = await getGameById(gameId);
            fillGameEditor(gameData);
            $(".game-editor").show();
            $("#save-game-button").show().data("mode", "edit").data("id", gameId); 
        });
    });

    let users = await getAllUsers(token);
    users.forEach(user => {
        let userElement = `
            <div class="user" onclick="banUser(${user.id})">
                <h2>${user.displayName}</h2>
                <h3>ID: ${user.id}</h3>
            </div>
        `;
        $(".users").append(userElement);
    });

    $("#continue-button").click(async function () {
        let title = $("#game-title").val();
        if (title) {
            let games = await getAllGames();
            let gameData = await getGameById(existingGame.id);
            fillGameEditor(gameData);
            $("#save-game-button").show();

            $(".game-editor").show();
            
        } else {
            alert("Будь ласка, введіть назву гри");
        }
    });

    $("#save-game-button").click(async function () {
        let mode = $(this).data("mode");
        let gameId = $(this).data("id");

        let gameData = {
            id: gameId,
            title: $("#game-title").val(),
            description: $("#game-description").val(),
            price: $("#game-price").val(),
            releaseDate: "2024-06-23",
            titleImageUrl: $("#game-main-image").val(),
            screenshots: [
                $("#game-screenshot1").val(),
                $("#game-screenshot2").val(),
                $("#game-screenshot3").val(),
                $("#game-screenshot4").val(),
                $("#game-screenshot5").val()
            ],
            genres: [
                $("#game-genre1").val(),
                $("#game-genre2").val(),
                $("#game-genre3").val()
            ]
        };

        console.log(JSON.stringify(gameData))
        if (mode === "edit") {
            await updateGame(token, gameData);
            alert("Гру відредаговано успішно!");
        }
        $(".game-editor").hide();
        $("#save-game-button").hide();
    });

    function fillGameEditor(game) {
        $("#game-title").val(game.title || '');
        $("#game-description").val(game.description || '');
        $("#game-price").val(game.price || '');
        $("#game-main-image").val(game.mainImage || '');

        $("#game-screenshot1").val((game.screenshots && game.screenshots[0]) || '');
        $("#game-screenshot2").val((game.screenshots && game.screenshots[1]) || '');
        $("#game-screenshot3").val((game.screenshots && game.screenshots[2]) || '');
        $("#game-screenshot4").val((game.screenshots && game.screenshots[3]) || '');
        $("#game-screenshot5").val((game.screenshots && game.screenshots[4]) || '');

        $("#game-genre1").val((game.genres && game.genres[0]) || '');
        $("#game-genre2").val((game.genres && game.genres[1]) || '');
        $("#game-genre3").val((game.genres && game.genres[2]) || '');
    }
});