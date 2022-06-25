const channel = '989341897313091586'
module.exports = {
    name: 'bot',
    description: 'Gets role to use bots',
    execute(message, args){
        if(!message.member.roles.cache.has('989357957508661268')){
            message.channel.send(`You already can access <#${channel}>`)   
        }
        else{
            message.channel.send('You have dont have the bot command permissions')
        }

    }
}