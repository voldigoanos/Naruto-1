module.exports = {
	config: {
			name: "prefix",
			version: "1.0",
			author: "Shizuka junior",
			countDown: 5,
			role: 0,
			shortDescription: "prefix bot",
			longDescription: "le prefix du bot 🔥𖠸𝑆𝐻𝐼𝑁𝑅𝐴㉨𝐾𝑈𝑆𝐴𝐾𝐴𝐵𝐸𖠸🔥",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "prefix") return message.reply(" MON PREFIX EST [🔥]");
}
};
