/**
 * Метод для авторизації
 * @param {object} data Об'єкт з електронною адресою та паролем користувача
 * @param {string} data.email Електронна адреса користувача
 * @param {string} data.password Пароль користувача
 *
 * @returns {object} Object з токенами доступу та оновлення
 * @returns {string} Object.accessToken Токен доступу для авторизованого користувача
 * @returns {string} Object.refreshToken Токен оновлення для поновлення токену доступу
 */
async function login(data = {}) {
    const response = await fetch(
        LOGIN_URL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    return await response.json();
}

/**
 * Метод для реєстрації нового користувача
 * @param {object} data Об'єкт з даними для реєстрації
 * @param {string} data.displayName Ім'я користувача
 * @param {string} data.email Електронна адреса користувача
 * @param {string} data.password Пароль користувача
 * @param {string} data.confirmPassword Підтвердження пароля користувача
 *
 * @returns {object} Object з токенами доступу та оновлення
 * @returns {string} Object.accessToken Токен доступу для авторизованого користувача
 * @returns {string} Object.refreshToken Токен оновлення для поновлення токену доступу
 */
async function register(data = {}) {
    const response = await fetch(
        REGISTER_URL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    return await response.json();
}

/**
 * Метод для отримання інформації про поточного користувача
 * @param {string} token Токен доступу для авторизованого користувача
 *
 * @returns {object} Object з інформацією про користувача
 * @returns {string} Object.displayName Ім'я користувача
 * @returns {string} Object.email Електронна адреса користувача
 * @returns {object} Object.role Об'єкт, що містить інформацію про роль користувача
 * @returns {string} Object.role.name Назва ролі користувача
 */
async function getMe(token) {
    const response = await fetch(
        GET_ME_URL,
        {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
    return await response.json();
}

/**
 * Метод для отримання оновленого токену
 * @param {string} refreshToken Токен оновлення для поновлення токену доступу
 *
 * @returns {object} Object з токенами доступу та оновлення
 * @returns {string} Object.accessToken Токен доступу для авторизованого користувача
 * @returns {string} Object.refreshToken Токен оновлення для поновлення токену доступу
 */
async function refreshToken(refreshToken) {
    const response = await fetch(
        REFRESH_TOKEN_URL,
        {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${refreshToken}`,
                "Content-Type": "application/json"
            }
        });
    return await response.json();
}


async function getAllGames() {
    const response = await fetch(
        GET_ALL_GAMES_URL,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
    return await response.json();
}


async function getAllUsers(token) {
    const response = await fetch(
        GET_ALL_USERS_URL,
        {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token.accessToken}`,
                "Content-Type": "application/json"
            }
        }
    )
    return await response.json();
}

async function getGameById(id){
    const response = await fetch(
        GET_GAME_BY_ID_URL + id,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    return await response.json();
}
async function createGame(token, gameData) {
    const response = await fetch(
        CREATE_GAME_URL,
        {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token.accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(gameData)
        }
    );
    return await response.json();
}

async function updateGame(token, gameData) {
    const response = await fetch(
        UPDATE_GAME_URL,
        {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${token.accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(gameData)
        }
    );
    return await response.json();
}

/*
{"id":34,"title":"Tavern Talk","description":"A cozy visual novel about running a tavern in a D&D-inspired fantasy! Gather rumors, serve magical drinks, and meet adventurers on a life-changing quest.","price":"10.99","releaseDate":"2024-06-23","titleImageUrl":"","screenshots":["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2076140/ss_80198577768e7c73c2106cab993db394ed077e1e.600x338.jpg?t=1719047787","https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2076140/ss_889231f1f857e953e778046f90e530c3f5ecda75.600x338.jpg?t=1719047787","https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2076140/ss_547ac7063d48612343b3d3ad7aa0322ba6a85483.116x65.jpg?t=1719047787","https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2076140/ss_2bf010b4485b93e7da6a00e17b7518e7d32333ef.600x338.jpg?t=1719047787",""],"genres":[null,null,null]}
 */