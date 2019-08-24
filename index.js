const Discord = require("discord.js");
const client = new Discord.Client();
//-----------------------
//part command

var que = [];
var partstart = [];
client.on('message', message => {
    if(partstart){
        if(message.content.toLowerCase() == "!" + "part") {
            if(que.indexOf(message.author.username) > -1) {
                message.reply("You are already in the Queue!");
            } else {
               
            que.push(message.author.username);
            message.reply("You have been added to the List ");
            }
        }
    }
       
        if(message.content.toLowerCase() == "!" + "quit") {
            if(que.indexOf(message.author.username) === -1) {
               message.reply('You are no in the list to Quit!!')
            } else {
                que.splice(que.indexOf(message.author.username), 1)
                message.reply("You Have been removed from the List");
            }
        }

    if(message.content.toLowerCase() == '!' + 'ec')
    if(message.member.roles.some(r => r.name === "HOST"))
    {
        partstart = false;
        message.reply('Event closed')
    }    else {
        message.reply('Sorry, you dont have permission to do that!')
    }

    if(message.content.toLowerCase() == '!' + 'eo')
    if(message.member.roles.some(r => r.name === "[ Host ]")){
        partstart = true;
        message.reply('Event Opened')
    } else {
        message.reply('Sorry, you dont have permission to do that!')
    }
            
          if(message.content.toLowerCase() == "!" + "list")
          {      
            let prfrmingnow = que[0];
      
              const Preformingembed = new Discord.RichEmbed()
            .setTitle("Performing Now  : "  +  prfrmingnow)
            .setColor(0x00AE86);   

            let nextpreformer = que[1];

            const nextprfrmingembed = new Discord.RichEmbed()
            .setTitle("Next : " + nextpreformer)
            .setColor(0x00AE86);

            let msg = '';

          const list = new Discord.RichEmbed()
          .setTitle("List of Parts :")
          for(let i = 0; i < que.length; i++) // loop
          {
             msg+= i + '.' + que[i] + ` ` + '\n'; // adds '.' and value of que[i] and adds a newline
           list.setTitle("Participants :" +  que.length)
          }
          list.setDescription(msg)
          .setColor(0x00AE86)
          
              
              message.channel.send(Preformingembed).then(()  =>
              {
                message.channel.send(nextprfrmingembed)
               message.channel.send(list);
              })            
          }
          if(message.content.toLowerCase() == '!' + 'next')
          {
             message.reply('Removed ' + que[0])
            que.shift(que);
            let prfrmingnow = que[0];
            let nextpreformer = que[1];

            const Preformingembed = new Discord.RichEmbed()
                .setTitle("Performing Now  : "  +  prfrmingnow)
                .setColor(0x00AE86); 
            const nextprfrmingembed = new Discord.RichEmbed()
                .setTitle("Next : " + nextpreformer)
                .setColor(0x00AE86);
            message.channel.send(Preformingembed).then(() =>
            {
               message.channel.send(nextprfrmingembed)
            })
        }
   

if(message.content.toLowerCase() == '!' + 'clear')
if(message.member.roles.some(r => r.name === "HOST"))
{
    function empty() {
        que.length = 0
    }
    empty();
    message.reply('Cleared The list!')
}
});
//----------
//EMBEDS
//-----------------
//Timer
client.on("message", message => {
    if(message.content.toLowerCase() == "!timer 90")
    if(message.member.roles.some(r => r.name === "HOST"))
    {   
        message.reply("Timer set for 90 Seconds..")
        let timer = 90;
        const clock = setInterval(() => {
            timer--;
            console.log(timer);
            if (timer == 60)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 45)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 25)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 10)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 5)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 0)
            {
                clearInterval(clock);
                message.channel.send({embed :{
                    color: 3447003,
                    title: "and thats TIME"
                }})
            }
        }, 1000) 
      }
    
});
client.on("message", message => {
    if(message.content.toLowerCase() == "!timer 60")
    if(message.member.roles.some(r => r.name === "HOST"))
    {   
        message.reply("Timer set for 60 Seconds..")
        let timer = 60;
        const clock = setInterval(() => {
            timer--;
            console.log(timer);
            if (timer == 45)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 30)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 25)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 15)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 10)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 5)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer + " Seconds left"
                }})
            }
            if(timer == 0)
            {
                clearInterval(clock);
                message.channel.send({embed :{
                    color: 3447003,
                    title: "and thats TIME"
                }})
            }
        }, 1000) 
      }
    
});

client.on("message", message => {
    if(message.content.toLowerCase() == "!timer 30")
    if(message.member.roles.some(r => r.name === "HOST"))
    {   
        message.reply("Timer set for 30 Seconds..")
        let timer = 30;
        const clock = setInterval(() => {
            timer--;
            console.log(timer);
            if (timer == 30)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 25)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 20)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 15)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 10)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 5)
            {
                message.channel.send({embed :{
                    color: 3447003,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 0)
            {
                clearInterval(clock);
                message.channel.send({embed :{
                    color: 3447003,
                    title: "and thats TIME"
                }})
            }
        }, 1000) 
      }
    
});
//------------ SOMEONE AVATAR

client.on("message", message => {
    if (message.content.startsWith("!avatar"))
    {
        let user = message.mentions.users.first()
        if(!user)
        {
            const embed = new Discord.RichEmbed()
            .setTitle("Your avatar :")
            .setThumbnail(message.author.displayAvatarURL)
            message.channel.send(embed)
           
        }                         
         else if(user)
        {
             message.channel.send(`${user.username}'s avatar is: ${user.displayAvatarURL}`)
        }
    }
    
})
//---------------------------
//Greeting Function And Autorole
client.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(ch => ch.name === "💬addiction-chat");
    if(!channel) return;
const embed = new Discord.RichEmbed()
   .setTitle(`Welcome to the server, ${member.displayName} `)
   //.setThumbnail()
   .setColor(0x00AE86)
   .addField("Rules", "\n1.Do not judge other people who just started beatboxing \n2.Do not spam in the chat\n3.Do not cuss or swear at anyone if they were toxic talk to a staff\n4.Do whatever u like but do not annoy anyone")
    .addBlankField()
    .addField("Youtube", " Make sure to follow us on Youtube.. Click on the Title")
    .setURL("https://www.youtube.com/channel/UCi-VcPuTY2lZLufp3r3LfDA?")
   .setDescription("Please make sure to follow our rules and go to the role-setup and color-setup rooms to give urself some roles and  a color.")
   .setTimestamp()
   .setFooter("Make sure to have fun :) and jam with ur friends")

   channel.send(embed);
     
   var role = member.guild.roles.find(role => role.name == "Addicted Visitor")

    member.addRole(role);

});
//--------------------
//Playing a game :
client.on("ready", () => {
    let user = "Prefix : !    For help : !hlp    Made by ZoonAttack"
        client.user.setActivity(user)
  });
//-----------------------------------------------------------------
//!beatboxer function
client.on("message", message => {
    if(message.content.toLowerCase() == "!" + "beatboxer")
      if(message.member.roles.find(r => r.name === "Beatboxer🎤"))
        message.reply("You already have the Role!")
        else {
        let role = message.guild.roles.find(role=> role.name === "Beatboxer🎤")
             message.member.addRole(role)
             message.reply("You now have the Beatboxer Role!!");
    }
})
//----------------------------------------------------------------
//Flip a coin
function coinFlip(){
    return (Math.floor(Math.random()* 2 ) == 0) ? 'Tails!' : 'Heads!';
}
client.on('message', message =>{
   if(message.content.toLowerCase() == '!' + 'flipcoin'){
       message.reply("It's" + " " + coinFlip() + "!");
   }
});
//------------------------------------------------------------------

client.on('message', message => {
    if(message.content.toLowerCase() === '!' + 'hlp') {
        message.channel.send({embed: {
            color: 3447003,
            description: "Here are some commands u can type:\n```1. !flipcoin : Flips a coin Landing either heads or tails!\n2. Ping : The bot replies Pong Po!\n3. !part : The bot adds u to the Queue for the tournament\n4. !beatboxer : The bot gives u the beatboxer role\n5. Timer Has been added for tourneys... 90 60 30 seconds.```"
        }});
        
    }
});

//------------------------------------------------------------------


client.on('message', message => {
    if (message.content.toLowerCase() == 'ping')
      message.channel.send('Pong Po!')
});

//------------------------------------------------------------------
const on = ('Ready');

console.log(on);


client.login();