const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  new: newTicket,
  create
};

async function newTicket(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    res.render("tickets/new", { flight });
  } catch (err) {
    console.error(err);
    res.status(500).render('error');
  }
}

async function create(req, res) {
  try {
    const flightId = req.params.id;
    const ticketData = {
      seat: req.body.seat,
      price: req.body.price,
      flight: flightId
    };

    await Ticket.create(ticketData);
    res.redirect(`/flights/${flightId}`);
  } catch (err) {
    console.log(err);
    res.render("tickets/new", { errorMsg: err.message });
  }
}