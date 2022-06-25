module.exports = async (client) => {

    const guild = client.guilds.cache.get('988901781910196234');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('990286003115814953');
        channel.setName(`➕┃Members: ${memberCount.toLocaleString()}`)
        console.log('Updating Member Count!')
    },200000)
}