const axios = require('axios');
const UPoLPrefix = [
  '-ai',
  'ai',
  '/ai',
  'bot',
  'ask'
]; 

  module.exports = {
  config: {
    name: 'ai',
    version: '1.2.1',
    role: 0,
    category: 'AI',
    author: 'voldigo anos',
    shortDescription: '',
    longDescription: '',
  },
  
  onStart: async function () {},
  onChat: async function ({ message, event, args, api, threadID, messageID }) {
      
      const ahprefix = UPoLPrefix.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!ahprefix) {
        return; 
      } 
      
     const upol = event.body.substring(ahprefix.length).trim();
   if (!upol) {
        await message.reply('╭────────────────\n|𝘀𝗮𝗹𝘂𝘁 𝗺𝗼𝗿𝘁𝗲𝗹 💁‍♂️ \n|𝗺𝗼𝗶 𝗰'𝗲𝘀𝘁 🩸𝘃𝗼𝗹𝗱𝗶𝗴𝗼 𝗻𝗮𝗺𝗶𝗸𝗮𝘇𝗲🩸\n|𝘂𝗻𝗲 𝗶𝗻𝘁𝗲𝗹𝗹𝗶𝗴𝗲𝗻𝗰𝗲 𝗮𝗿𝘁𝗶𝗳𝗶𝗰𝗶𝗲𝗹𝗹𝗲 \n|𝗰𝗿𝗲é 𝗽𝗮𝗿 🌿𝘃𝗼𝗹𝗱𝗶𝗴𝗼 𝗮𝗻𝗼𝘀🌿 ');
        return;
      }
      
      const apply = ['𝗲𝗻 𝗾𝘂𝗼𝗶 𝗽𝘂𝗶𝘀 𝗷𝗲 𝘁'𝗮𝗶𝗱𝗲𝗿'];
      
     const randomapply = apply[Math.floor(Math.random() * apply.length)];

     
      if (args[0] === 'hi') {
          message.reply(`${randomapply}`);
          return;
      }
      
    const encodedPrompt = encodeURIComponent(args.join(" "));

   await message.reply('𝘃𝗼𝗹𝗱𝗶𝗴𝗼 𝗮𝗻𝗼𝘀..');
  
    const response = await axios.get(`https://sandipbaruwal.onrender.com/gemini?prompt=${encodedPrompt}`);
 
     const UPoL = response.data.answer; 

      const upolres = `${UPoL}`;
      
        message.reply(upolres);
  }
};
