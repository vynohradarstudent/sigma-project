$(document).ready( async function() {

    let token = {
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken")
    }


    $(".back").click(() => {
        $(".ban").hide();
        $(".games").hide();
        $(".actions").show()
    })
    $(".ban-button").click(() => {
        $(".actions").hide();
        $(".ban").show();
    })
    $(".games-button").click(() => {
        $(".actions").hide();
        $(".games").show();
    })
    let users = await  getAllUsers(token)

    users.forEach( user => {
        let userElement = `
            <div class="user" onclick="banUser(${user.id})">
                  <h2>${user.displayName}</h2>
                  <h3>ID: ${user.id}</h3>
            </div>
        `;
        $(".users").append(userElement);
    })

    function banUser(id) {

    }
})