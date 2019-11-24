var fs = require('fs');
const Discord = require('discord.js');
client = new Discord.Client()
module.exports = {
  async execute(message) {
    let supportRole = message.guild.roles.find(role => {
      return role.name === 'Support Team';
    })
    console.log(supportRole)
    if (supportRole) {
      return supportRole
    }
    return await message.guild.createRole({
      name: 'Support Team'
    });
  }
}
