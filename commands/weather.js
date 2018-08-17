const { Command } = require('discord-akairo');
const utf8 = require('utf8');
const axios = require('axios');

class WeatherCommand extends Command {
    constructor() {
        super('weather', {
            aliases: ['weather'],
            split: 'quoted',
            args: [
                { id: 'city', type: 'string', default: 0 }
            ]
        });
    }

    async exec(message, args) {
        if (!args.city) {
            return message.channel.send(`${message.author} Bitte gib eine Stadt ein!`);
        }
        let stadt = args.city;
        let city = utf8.encode(stadt);
        let apiKey = process.env.WEATHER_API_KEY;

        try {
            let response = await axios('http://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: stadt,
                    appid: apiKey,
                    units: 'metric'
                }
            });

            return message.channel.send(`${message.author} In ${response.data.name} sind es gerade ${response.data.main.temp}°C `);
        } catch (error) {
            return message.channel.send(`${message.author} Das Wetter für ${city} kann dir nicht angezeigt werden.`);
        }
    }
}

module.exports = WeatherCommand;