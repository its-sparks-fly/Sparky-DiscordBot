require('dotenv').config();
const { AkairoClient } = require('discord-akairo');
const { prefix, token } = require('./config.json');

const path = require('path');

const client = new AkairoClient({
    ownerID: '225695039605440512',
    prefix: prefix,
    commandDirectory: path.resolve('commands')
}, { disableEveryone: true });

client.login(process.env.DISCORD_TOKEN);