const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log("Bot Açıldı!");

    client.user.setPresence({
        activities: [{
            name: "YRenxx #YouTube",
            type: ActivityType.Watching
        }],
        status: "online"
    });
});

client.login("MTUyMjI2NjY2NDExMTE4MTk0Ng.Gt0pjN.4jfqdAhMJzC_x2IIt-0iDxSH42owScmQVUk7bI");
