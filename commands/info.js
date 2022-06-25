module.exports = {
    name: 'info',
    description: 'Tells info',
    execute(message, args, Discord){
        const Sembed = new Discord.MessageEmbed()
        .setColor('#ffb000')
        .setTitle('Info')
        .setDescription('Info about the suncoast server')
        .addFields(
            {name: 'Creation', value: 'The Server was created by Jpizza99 as a way to reach out to other suncoast students.'},
            {name: 'Use', value: 'Mainly used for communication amoung students and for bot tools'}
        
        )
        
        message.channel.send({ embeds: [Sembed] })
    }
}
