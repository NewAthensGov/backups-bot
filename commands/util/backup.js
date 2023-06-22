const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('backup')
		.setDescription('Creates a server backup file'),
        async execute(client, message, args) => {
    
     	   // If the member doesn't have enough permissions
     	   if(!message.member.hasPermission('MANAGE_MESSAGES')){
     	       return message.channel.send(':x: You need to have the manage messages permissions to create a backup in this server.');
     	   }

     	   backup.create(message.guild).then((backupData) => {
	
     	       return message.channel.send('Backup created! Here is your ID: `'+backupData.id+'`! Use `'+config.prefix+'load-backup '+backupData.id+'` to load the backup on another server!');

    	    }).catch(() => {

     	       return message.channel.send(':x: An error occurred, please check if the bot is administrator!');

    	    });
	},
};
