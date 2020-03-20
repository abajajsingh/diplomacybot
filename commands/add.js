// IGNORE RIGHT NOW: THINKING OF WIRING SOME SORT OF MONGOOSE SERVER IN THE FUTURE

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/')
module.exports = {
	name: 'add',
    description: 'adds user to the game',
    permission: 'everybody',
    execute(message, args) {
       
	}
};