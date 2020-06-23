const moongoose = require('mongoose');
const {ticketSchema}  = require('../models/ticket.model');
const Schema = moongoose.Schema;

const interviewSessionSchema = new Schema({
    ticket: ticketSchema,
    timeIn: {type: Date, required:true}
}, {
    timestamps: true,
});

const InterviewSession = moongoose.model('InterviewSession', interviewSessionSchema);

module.exports = InterviewSession;