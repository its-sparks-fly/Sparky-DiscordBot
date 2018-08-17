const { Command } = require('discord-akairo');

class HelpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['help', 'commands', 'list']
        });
    }

    exec(message) {
        // do something
    }
}

module.exports = HelpCommand;