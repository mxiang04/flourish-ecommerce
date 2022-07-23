const router = require("express").Router();
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  return stripe.charges
    .create({
      amount: req.body.amount,
      currency: "usd",
      source: req.body.source,
    })
    .then((charge) => {
      res.status(200).send(charge);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;
