const Discord = require('discord.js');
const color = require('.././EmbedColor');

module.exports.run = async(bot, message, args, db) =>{
    db.collection('Core').find().toArray((err,res) =>{
        let embed = new Discord.RichEmbed()
        .setAuthor(`About Prime`,bot.user.avatarURL)
        .setColor(color.set("blue"))
        .setDescription
        (`Moderation and utility bot made by Ekam#2488. If you enjoy with this bot, or you want to leave some feedback, you can typeit in the Feedbacks channel!`);

        message.channel.send(embed);
    });
}
module.exports.help = {
	name:"about"
}
