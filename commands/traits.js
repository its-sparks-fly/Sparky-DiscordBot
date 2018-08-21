const { Command } = require('discord-akairo');
const fs = require('fs');
const path = require('path');

class TraitsCommand extends Command {
    constructor() {
        super('traits', {
            aliases: ['traits', 'trait'],
            args: [
                { id: 'number', type: 'int', default: 1 }
            ]
        });
    }

    exec(message,args) {
        let number = args.number;
        let traits = '';
        const traitlist = fs.readFileSync(path.join(__dirname, '..', 'storage', 'traits.txt'), 'utf8').split('\n');
        for (let i = 1; i <= number; i++) {
            traits = traits + traitlist[Math.floor(Math.random() * traitlist.length)]
        }
        return message.channel.send(`${traits}`);
    }
}

module.exports = TraitsCommand;