const messages = require("../utils/messages");
const {
	MessageEmbed,
	MessageActionRow,
	MessageButton
} = require('discord.js');

module.exports = {
  name: "invite",
  description: "Get Invite Link for DisGiveaway",
  run: async (client, interaction) => {

    let invite = new MessageEmbed()
      .setAuthor(`Invite of ${client.user.username}`, `${client.user.displayAvatarURL({ format: 'png' })}`)
      .setColor("#2f3136")
      .setFooter(`© DisGiveaway | Have a nice day!`);

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setEmoji('865572290065072128')
				.setLabel(`Invite ${client.user.username}`)
				.setURL(`https://discord.com/api/oauth2/authorize?client_id=910559370843131944&permissions=8&scope=bot%20applications.commands`)
				.setStyle('LINK'),
			);

    await interaction.reply({ embeds: [invite],components: [row], ephemeral: true });
  },
};
