const { Command } = require('discord-akairo');
const commandlist = require('./storage/commands.json');

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