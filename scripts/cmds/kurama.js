const axios = require('axios');

const Prefixes = [
  'renard', 
  'démon',
  'kyubi',
  'KURAMA',
  'kurama',
];

module.exports = {
  config: {
    name: "kurama",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "AI",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("𝙋𝙪𝙩𝙖𝙞𝙣 𝙥𝙤𝙨𝙚 𝙩𝙖 𝙦𝙪𝙚𝙨𝙩𝙞𝙤𝙣... 😼");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply(answer);

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
