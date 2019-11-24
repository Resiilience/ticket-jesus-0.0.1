var fs = require('fs');
const Discord = require('discord.js');
client = new Discord.Client()
module.exports = {
  async execute(message) {
    let ticketCat = message.guild.channels.find(channel => {
      return channel.type === 'category' && channel.name === 'tickets';
    })
    if (ticketCat) {
      return ticketCat
    }
    return await message.guild.createChannel('tickets', {
      type: 'category',
      permissionOverwrites: [{
        id: message.guild.roles.find(role => role.name == "@everyone").id,
        deny: ["SEND_MESSAGES","VIEW_CHANNEL"]
      }]
    });
  }
}
