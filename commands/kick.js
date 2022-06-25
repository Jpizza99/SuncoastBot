module.exports = {
    name: 'kick',
    description: 'Responds Pong!',
    execute(message, args){
        // if(!message.member.roles.cache.has('989275958689271948')) return message.reply('You dont have perms for that');
        // const member = message.mentions.users.first(); 
        // if(member){
        //     const target = message.guild.members.cache.get(member.id)
        //     target.kick();
        //     message.channel.send('User has been kicked')
        // }else{
        //     message.channel.send('Member Does Not Exist')
        // }       
    }
}