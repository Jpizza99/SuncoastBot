module.exports = {
    name: 'ping',
    description: 'Responds Pong!',
    execute(message, args){
        if(message.member.roles.cache.has('989275958689271948')){
            message.channel.send('Pong!')   
        }
        else{
            message.channel.send('Ping?')
        }
    }
}