const { Command } = require('discord-akairo');
const path = require('path');
const commandlist = require(path.join(__dirname, '..', 'storage', 'commands.json'));

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