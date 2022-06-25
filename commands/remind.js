const ms = require("ms")
module.exports = {
    name: 'remind',
    description: 'Mutes a member',
    execute(message, args){
 
            if (args[0]){
                reminder = args[0]
                if (args[1]){
                    time = args[1]
                    setTimeout(function () {

                        message.channel.send(`<@${message.member.user.id}> Your reminder for ${reminder} is ready`)




                    }, ms(args[1])); 




                }
                else{
                    message.channel.send('There is no time add a time in the format of 3h or 4d')    
                }
            
           }
           else{
            message.channel.send('There is nothing to remind')
           }

    }
}