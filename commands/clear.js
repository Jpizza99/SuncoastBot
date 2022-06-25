module.exports = {
    name: 'clear',
    description: 'Clears msg',
    async execute(message, args){
        // console.log(args)
        if(!message.member.roles.cache.has('989275958689271948')) return message.reply('You dont have perms for that');
        if(!args[0]) return message.reply('Please enter the amnt of messages you wanted to clear not blank');
        if(isNaN(args[0])) return message.reply('Thats not a real number!');
        if(args[0] > 100) return message.reply('"Clear" command cant be used for over 100 messages');
        if(args[0] < 1) return message.reply('Must be more than 1 message');


        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        });



    }
}