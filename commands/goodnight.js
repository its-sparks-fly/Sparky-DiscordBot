const { Command } = require('discord-akairo');

class NightCommand extends Command {
    constructor() {
        super('night', {
            trigger: /^.*Gute Nacht.*$/i
        });
    }

    exec(message, match, groups) {
        const benteSleep= this.client.emojis.find(val => val.name === 'benteSleep');
        return message.channel.send(`${message.author} Gute Nacht! ${benteSleep}`);
    }
}

module.exports = NightCommand;