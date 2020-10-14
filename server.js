const { Client, RichEmbed } = require("discord.js");
const jokar = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const client = new Client({ disableEveryone: true})
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const superagent = require("superagent");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
client.login("NjY0ODk2ODk4NTg2NjQwMzg0.XhdwBg.BG44dYEDkPYziJPVg_eDY1z7Mvs")
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
const Fortnite = require("fortnite");
var table = require('table').table
const prefix = "-";
const google = require('google-it');
const Discord = require('discord.js');
const ldev = ["♚ 𝒯ℋℰ𝒥𝒪𝒦𝒜ℛ", "! - M7Shsh - ! [ mc ]", "، Angèl"];
const dev = ["561539284339785728", "343746103922917376", "378611609804996609"];

client.on("ready", ready => {
  console.log(`login As ${client.user.tag}`)
  console.log(``)
  console.log(`Devs ${ldev}`)
  console.log(``)
  console.log(`Servers ${client.guilds.size}`)
  console.log(``)
  console.log(`Users ${client.users.size}`)
});



client.on('message' , async (message) => {
  if(message.author.bot) return;
  if(!message.guild.channel) return;
  if (message.content.startsWith(prefix + 'say')) {
   const args = message.content.substring(prefix.length).split(' ');
  message.delete();
 args.shift() 
 let msg = args.join(' ') 
 message.channel.createWebhook(message.author.username, message.author.avatarURL) 
     .then(wb => {
         const user = new Discord.WebhookClient(wb.id, wb.token) 
         user.send(msg); 
         user.delete() 
     })
     .catch(console.error)
  }
 });


client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.toLowerCase().startsWith(prefix + `help`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: GreatNetwork Help`)
    message.channel.send({ embed: embed });
  }

  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`Hoold on!`).then(m => {
    m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
    });
}

if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

    message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '=confirm', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

});


let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'HypeLC User',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credits')) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith(prefix + "daily")) {
 
 
  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 310
    message.channel.send(`**${message.author.username} you collect your \`310\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix +'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-")) return  message.channel.send('**!! I Cant Do it**');
                 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : Amount**  \n \`${x[x3]}\` ** : Write the Number to Complete **`).then(msg1=> {
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(` :credit_card: | Transfer Receipt \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);
 
        })
        })
       
       
 
 
 
 
}
 
});



client.on('ready', function(){
console.log(`Logged in as ${client.user.tag}!`);    
   var large = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293']; // صور الكبيرة
 var small = ['483055660209012736','480169573530861578','483055655800930315'];  // صور الصغيرة
    setInterval(function (){  
    client.user.setPresence({
  status: 'dnd',
 game: {
    type: 1,
    name: 'Bot Online -help',
     url: 'https://www.twitch.tv/n3k4a',
     state: `new stream code `,
    application_id: '532298006951624745',  
     assets: {
        small_text: ' n3k4a is one! ' ,
        large_text: `I'm n3k4a :)` },
    large_image:  `${large[Math.floor(Math.random() * large.length)]}`,
    small_image:   `${small[Math.floor(Math.random() * small.length)]}`,
    }
 
    });
    }, 5000);
});


client.on('message', message => { 
    const mm = message.mentions.members.first() || message.member;
    if(message.content.startsWith(prefix + "avatar")){
        const embed = new Discord.RichEmbed()
        .setAuthor(mm.user.tag, mm.user.avatarURL)
        .setTitle("Avatar Link")
        .setURL(mm.user.avatarURL)
        .setImage(mm.user.avatarURL)
        .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed);
    }
});



client.on('message', message =>{
if(message.content.startsWith(prefix + 'give')) {
let owner = ["561539284339785728", "343746103922917376", "343746103922917376"] // your ID here
if(!owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1).join(" ");
message.channel.sendFile(args).catch(sty => {message.channel.send('**I can\'t find this file ❌**')})
}
});



client.on('message', haider => {   if (haider.content === 'السلام عليكم') {     haider.channel.send('وعليكم السلام ورحمة الله و بركاته');   } });



client.on ('message', async (toxicc) => {
  if (!toxicc.guild || toxicc.author.bot) return false;
  var prefix = "-";
  switch (toxicc.content.split(' ') [0]){
    case prefix + 'invite':
      client.generateInvite(["ADMINISTRATOR"]).then (url => {
        toxicc.channel.send("Invite Link:\n" + url)
      })
      break;
  }
});
 

client.on("message", message => {
  
if(message.author.bot) return;

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('انت لا تملك الصلاحيه الكافيه لقفل وفتح الشات') 
  
if(!message.content.startsWith(prefix)) return;

 if(!message.channel.guild) return message.reply("This Command for only server")
  
if(message.content === (prefix + 'lock')) {

  message.channel.overwritePermissions(message.guild.id, {
    
    SEND_MESSAGES: false 
  }).then(() => {
          let embed = new Discord.RichEmbed()
          .setColor("")
          .setAuthor(`**تم غلق الشات بواسطه ** : ${message.author.username} `)
          message.channel.send(embed) 
  
  })
} 
 })

client.on("message", message => {
  
  if(message.author.bot) return;
  
  if(!message.content.startsWith(prefix)) return;
  
  if(!message.member.hasPermission('MANAGE_CHANNELS'))  return message.reply("انت لا تملك الصلاحيه الكافيه لقفل وفتح الشات")
  
  if(message.content === (prefix + "unlock")) {
 
    message.channel.overwritePermissions(message.guild.id, {
      
SEND_MESSAGES: true
    }).then(() => {
  let embed = new Discord.RichEmbed()
  .setColor()
  .setAuthor(`**تم فتح الشات بواسطه** : ${message.author.username}`) 
    message.channel.send(embed)
    })
  } 
}) 


client.on("message", message => {
              var args = message.content.substring(prefix.length).split("-");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**:x: sorry but this Command for servers only **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  you dont have perm to clear chat**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``chat has bean cleard ``",
          color: 0x06DF00,
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });


 client.on("guildMemberRemove", member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***See You Again ***" ,member.user.username )
    .setDescription('***Good ByE***')
    .setColor('RANDOM')
    .setImage('https://cdn.pg.sa/baopKncJ9i.gif')
var channel =member.guild.channels.find('name', 'leave')
if (!channel) return;
channel.send({embed : embed});
});


client.on('message', message => {
    if (message.content.toLowerCase() === prefix + "help") {
        if(!message.channel.guild) return message.channel.send("** هذا الامر للسيرفرات فقط ⛔  **");
        message.channel.send("*** تم  روح شيك عالخاص :spy:***  | :white_check_mark: :envelope:")
            let embed = new Discord.RichEmbed()

        .setTitle("الأوامر ♥")
        .addField("-new",' صورة قطوة ')
        .addField("-clear",' يمسح الشات ')
        .addField("-invite",' يعطيك رابط البوت ')
        .addField("-id",' يطلعلك ايديك ')
        .addField("-new",' يسوي تيكيت ')
        .addField("-daily",' تاخذ راتبك اليومي ')
        .addField("-credits",' يوريك كم عندك كردت ')
        .addField("-trans",' تحويل الكردت لشخص ')
        .setColor("RANDOM")
        message.author.sendEmbed(embed);
    }
});  


client.on('message', message => {
var prefix = "-" // برفكس حقك هني
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)              
    .setFooter(`${client.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });