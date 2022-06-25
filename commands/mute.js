const ms = require("ms")
module.exports = {
    name: 'mute',
    description: 'Mutes a member',
    execute(message, args){
        if(!message.member.roles.cache.has('989275958689271948')) return message.reply('You dont have perms for that');
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
            let memberTarget = message.guild.members.cache.get(target.id);
              
            if(args[1]){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> Was muted`)
                return 
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> Was muted for ${ms(ms(args[1]))}`);
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                
            }, ms(args[1]));

                
        }else{
            message.channel.send('Cant find member');
        }

    }
}