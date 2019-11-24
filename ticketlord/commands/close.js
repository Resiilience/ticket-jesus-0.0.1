const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
  name: "close",
  description: '',
  execute(message) {
    message.channel.delete()
  }
}
