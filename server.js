// Stripe Server
// TODO: host this on firebase maybe?

const app = require("express")();
const stripe = require("stripe")("sk_test_avCwuzIvg45JxkjItTyqRGH600JEoryzyP");

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
  console.log(req.body);
  let source = req.body.split(' amount: ')[0];
  let amount = req.body.split(' amount: ')[1].split(' description: ')[0];
  let description = req.body.split(' amount: ')[1].split(' description: ')[1];
  try {
    let {status} = await stripe.charges.create({
      amount:  amount,
      currency: "usd",
      description: description,
      source: source,
    });

    res.json({status});
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

app.listen(9000, () => console.log("Listening on port 9000"));