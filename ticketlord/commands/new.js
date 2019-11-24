var fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const findOrCreateTicketChannel = require(`../findOrCreateTicketChannel.js`)
const findOrCreateSupportRole = require(`../findOrCreateSupportRole.js`)
module.exports = {
  name: 'new',
  description: '',
  async execute(message, args){
    const channelCat = await findOrCreateTicketChannel.execute(message)
    const supportRole = await findOrCreateSupportRole.execute(message)
    const ticketid = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
      message.guild.createChannel(`ticket-${ticketid}`, {
          type: 'text',
          parent: channelCat.id,
          permissionOverwrites: [{
            id: message.guild.roles.find(role => role.name == "@everyone").id,
            deny: ["SEND_MESSAGES", "VIEW_CHANNEL"]
          }],
          permissionOverwrites: [{
            id: message.author.id,
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
          }],
          permissionOverwrites: [{
            id: supportRole.id,
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
          }]
      })
  }
}
