const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    interviewee_name: {type: String, required: true},
    interviewee_id: {type: String, required: true},
    status: {type: Number, required: true},
    time_in: {type: Date, required: true},
}, {
    timestamps: true,
})

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;