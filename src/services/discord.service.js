// services/discord.js
import config from "../config.json";

export async function getDiscordUser(id) {
    const response = await fetch(
        `https://discord.com/api/v10/users/${id}`,
        {
            headers: {
                Authorization: `Bot ${config.discordBotToken}`
            }
        }
    );

    if (!response.ok) {
        throw new Error(`Discord API error: ${response.status}`);
    }

    const user = await response.json();

    return user;
}

export async function getMe() {
    const response = await fetch(
        `https://discord.com/api/v10/users/${config?.discord}`,
        {
            headers: {
                Authorization: `Bot ${config?.discordBotToken}`
            }
        }
    );

    if (!response.ok) {
        throw new Error(`Discord API error: ${response.status}`);
    }

    const user = await response.json();

    return user;
}