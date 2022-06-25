//URL https://discord.com/api/oauth2/authorize?client_id=989286549973778482&permissions=8&scope=bot

//Get discord.js library
const Discord = require("discord.js");

//use other .js files
const fs = require('fs');

// Bot Token
const tok = "";

//Make Bot
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

//Set Prefix aka !ping or /ping or -ping or ?ping
const prefix = '/';

const memberCounter = require('./counters/member-counter')

//Command Collection
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}




//When Bot is online say "Suncoast Bot Online!"
client.once('ready', () => {
    memberCounter(client)
    console.log("Suncoast Bot Online!")

});






client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(Role => (role.name === 'Member'));
    guildMember.roles.add(welcomeRole)
    const Sembed = new Discord.MessageEmbed()
    .setColor('#ffb000')
    .setTitle('Welcome!')
    .setDescription('Welcome to the suncoast server')
    .addFields(
        {name: 'Welcome', value: `Welcome <@${guildMember.user.id}> to the suncoast server glad to have you!`}
        
    
    )
    
    message.channel.send({ embeds: [Sembed] })
    guildMember.guild.channels.cache.get('988925674465140736').send()
});




//Command Manager
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'ping'){
        client.commands.get('ping').execute(message,args);
    } else if(command === 'bot'){
    client.commands.get('bot').execute(message,args);
    } else if(command === 'info'){
    client.commands.get('info').execute(message,args, Discord);
    } else if(command === 'clear'){
    client.commands.get('clear').execute(message,args)
    } else if(command === 'kick'){
    client.commands.get('kick').execute(message, args)
    } else if(command === 'ban'){
    client.commands.get('ban').execute(message, args)
    } else if(command === 'mute'){
    client.commands.get('mute').execute(message, args)
    } else if(command === 'unmute'){
    client.commands.get('unmute').execute(message, args)
    } else if(command === 'remind'){
    client.commands.get('remind').execute(message,args)
    } 
});







//eof
client.login(tok);
