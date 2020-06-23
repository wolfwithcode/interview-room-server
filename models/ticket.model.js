const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    username: {type: String, required: true},
    description: {type: String, required:true},
    skypeId: {type: String, required:true},
    timeIn: {type: Date, required:true},
}, {
    timestamps: true,
});

const Ticket = mongoose.model('Ticket', ticketSchema);

// module.exports.Ticket = Ticket;
// module.exports.ticketSchema = ticketSchema;

module.exports = {Ticket, ticketSchema};