const { SlashCommandBuilder } = require('discord.js');
const backup = require('discord-backup');
const config = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('backup')
		.setDescription('Creates a server backup file'),
        async execute(interaction, client, message, args) {
    
     	   // If the member doesn't have enough permissions
     	   //if(!message.member.hasPermission('MANAGE_MESSAGES')){
     	   //    return message.channel.send(':x: You need to have the manage messages permissions to create a backup in this server.');
     	   //}

     	   backup.create(config.guildId).then((backupData) => {
	
     	       return interaction.reply('Backup created! Here is your ID: `'+backupData.id+'`! Use `'+config.prefix+'load-backup '+backupData.id+'` to load the backup on another server!');

    	    });
	},
};
