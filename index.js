var Discord = require("discord.js");
var Client = new Discord.Client({intents: []});

Client.on("ready", () => {
    console.log("bot opérationel");
});

Client.login("OTI4NzI5NzA5Mjc2MTcyMzIw.YddA8Q.rCWcSX3g05t_JoUzObtxSrf0hT8");