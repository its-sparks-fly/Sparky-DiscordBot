const { Command } = require('discord-akairo');
const fs = require('fs');
const path = require('path');

class PunCommand extends Command {
    constructor() {
        super('pun', {
            aliases: ['pun', 'bente']
        });
    }

    exec(message) {
        const benteCool = this.client.emojis.find(val => val.name === 'benteCool');
        const puns = fs.readFileSync(path.join(__dirname, '..', 'storage', 'puns.txt'), 'utf8').split('\n');
        return message.channel.send(`${puns[Math.floor(Math.random() * puns.length)]} ${benteCool}`);
    }
}

module.exports = PunCommand;