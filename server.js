// Stripe Server
// TODO: host this on firebase maybe?

const app = require("express")();
const stripe = require("stripe")("sk_test_avCwuzIvg45JxkjItTyqRGH600JEoryzyP");

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
  console.log(req.amount);
  try {
    let {status} = await stripe.charges.create({
      amount: 20000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

app.listen(9000, () => console.log("Listening on port 9000"));