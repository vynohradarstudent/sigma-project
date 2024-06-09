$(document).ready(function () {

    $("button").on("click", async function () {
        let displayName = $("#displayName").val();
        let email = $("#email").val().toLowerCase();
        let password = $("#password").val().trim();
        let confirmPassword = $("#confirmPassword").val().trim();

        if (password !== confirmPassword) {
            alert("Паролі не співпадають!");
            return;
        }

        let registrationData = {
            displayName: displayName,
            email: email,
            password: password
        };

        try {
            let response = await register(registrationData);
            console.log(response);

            localStorage.setItem('registrationSuccess', 'true');

        } catch (error) {
            console.error("Помилка під час реєстрації:", error);
            alert("Сталася помилка під час реєстрації. Спробуйте ще раз.");
        }
    });
});