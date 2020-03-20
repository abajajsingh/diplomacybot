const {greetings,prefix}= require('../config.json');
module.exports = {
	name: 'hello',
    description: 'says hello',
    permission: 'everybody',
    execute(message, args) {
        let mention = message.mentions.users.first();
        console.log(message.author);
        let response = greetings[Math.floor(Math.random() * greetings.length)] + " :wave:";
        if(mention != null) {
            message.delete();
            message.reply("Message sent to user.")
            mention.send(response + `\n message sent by ${message.author.username}`);
        } else {
            message.reply(response);
        }
	}
};