const { Command } = require('discord-akairo');
const util = require('util');

class EvalCommand extends Command {
    constructor() {
        super('eval', {
            aliases: ['eval'],
            ownerOnly: true,
            args: [
                { id: 'code', type: 'string', default: 0 }
            ]
        });
    }

    async exec(message, args) {
        if (!args.code) {
            return message.channel.send('need eval');
        }

        let result;

        try {
            result = await eval(args.code);
        } catch (error) {
            result = error.message;
        }

        let inspected = util.inspect(result, { depth: 1 });
        return (inspected.length <= 2000) ? message.channel.send(inspected, { split: true, code: 'js' }) : message.channel.send('eval too big.');
    }
}

module.exports = EvalCommand;