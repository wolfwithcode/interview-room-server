const router = require('express').Router();
const InterviewSession = require('../models/interview-session.model');
const { Ticket } = require('../models/ticket.model');


router.route('/').get((req, res) => {
    InterviewSession.find()
        .then( interview => res.json(interview))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    // const {username, description, skypeId, timeIn} = req.body.ticket;
    // const ticket = new Ticket()
    Ticket.findById(req.body.ticketId)
        .then(ticket => {
            const timeIn = new Date();
            const active = true;
            const newInterviewSession = new InterviewSession({
                ticket,
                timeIn,
                active,
            });
            newInterviewSession.save()
            .then(interview => res.json(interview))
            .catch(err => res.status(400).json('Error: ' + err));
        });
});


module.exports = router;