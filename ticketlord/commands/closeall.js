const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
  name: 'closeall',
  description: '',
  execute(message, args){

    message.guild.channels.forEach(channel => {
      if (channel.parent != null && channel.type != 'category') {
        if (channel.parent.type === 'category' && channel.parent.name === 'tickets') {
          channel.delete()
        }
      }
    })
  }
}
