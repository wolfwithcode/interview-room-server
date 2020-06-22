const router = require('express').Router();
let Ticket = require('../models/ticket.model');

router.route('/').get((req, res) => {
    Ticket.find()
        .then(tickets => res.json(tickets))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req, res) => {

    const username = req.body.username;
    const description = req.body.description;
    const skypeId = req.body.skypeId;
    const timeIn = new Date();

    const newTicket = new Ticket({
        username,
        description,
        skypeId,
        timeIn,
    });

    newTicket.save()
        .then( ticket => res.json(ticket._id))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').get((req, res) => {
    Ticket.findById(req.params.id)
        .then(ticket => res.json(ticket))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').delete((req, res) => {
    Ticket.findByIdAndDelete(req.params.id)
        .then(() => res.json('Ticket deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
    
});

router.route('/update/:id').post((req, res) => {
    Ticket.findById(req.params.id)
    .then(ticket => {
        ticket.username = req.body.username;
        ticket.description = req.body.description;
        ticket.skypeId = req.body.skypeId;
        // ticket.timeIn = Date.parse(req.body.timeIn);
        ticket.save()
            .then( () => res.json('Ticket updated!'))
            .catch( err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
