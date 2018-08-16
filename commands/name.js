const { Command } = require('discord-akairo');
const fs = require('fs');
const path = require('path');

class NameCommand extends Command {
    constructor() {
        super('name', {
            aliases: ['name'],
            args: [
                { id: 'gender', type: 'string', default: 0 },
                { id: 'lastname', type: 'string', default: 0 }
            ]
        });
    }

    exec(message, args) {
        if (!args.gender) {
            return message.channel.send(`${message.author} Bitte gib ein Geschlecht ein! (female/male)`);
        }
        const s = args.gender;
        const firstnames = fs.readFileSync(path.join(__dirname, '..', 'storage', `${s}.txt`), 'utf8').split('\n');
        const first = firstnames[Math.floor(Math.random() * firstnames.length)], middle = firstnames[Math.floor(Math.random() * firstnames.length)];
        if(!args.lastname) {
            const lastnames = fs.readFileSync(path.join(__dirname, '..', 'storage', 'lastnames.txt'), 'utf8').split('\n');
            const last = lastnames[Math.floor(Math.random() * lastnames.length)]; 
            return message.channel.send(`${first} ${middle} ${last}`.replace(/\n|\r/g, ''));
        }
        return message.channel.send(`${first} ${middle} ${args.lastname}`.replace(/\n|\r/g, ''));
    }
}

module.exports = NameCommand;