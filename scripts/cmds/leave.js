const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
  config: {
    name: "leave",
    aliases: ["l"],
    version: "1.0",
    author: "Sandy",
    countDown: 5,
    role: 2,
    shortDescription: "bot will leave gc",
    longDescription: "",
    category: "admin",
    guide: {
      vi: "{pn} [tid,blank]",
      en: "{pn} [tid,blank]"
    }
  },

  onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('𝗖'𝗲́𝘁𝗮𝗶𝘁 𝘂𝗻 𝗽𝗹𝗮𝗶𝘀𝗶𝗿 𝗱𝗲 𝘃𝗼𝘂𝘀 𝗮𝘃𝗼𝗶𝗿 𝗰𝗼𝗻𝗻𝘂...𝙎𝘼𝙔𝙊𝙉𝘼𝙍𝘼 👋', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
    }
  };
