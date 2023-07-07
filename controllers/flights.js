const Flight = require("../models/flight");

module.exports = {
  index,
  new: newFlight,
  create,
  show,
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render("flights/index", { flights });
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render("flights/show", { flight });
}

function newFlight(req, res) {
  res.render("flights/new", { errorMsg: "" });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    Flight.create(req.body);
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
    res.render("flights/new", { errorMsg: err.message });
  }
}