$(document).ready(function () {
    $("#login").on("click", async function () {
        let email = $("#email").val().trim().toLowerCase();
        let password = $("#password").val().trim();

        try {
            let tokens = await login({ email: email, password: password });

            localStorage.setItem('accessToken', tokens.accessToken);
            localStorage.setItem('refreshToken', tokens.refreshToken);
        } catch (error) {
            console.error('Сталася помилка:', error);
        }
    });
});