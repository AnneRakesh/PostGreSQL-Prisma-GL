const express = require("express");
const app = express();
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const PORT = 5000;
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome To Express. This is my Applicaiton with NodeMon Installed");
});

app.get("/test", (req, res) => {
  res.send(" This is new end Point for testing the postMan");
});

app.post("/subscibeEmail", async (req, res) => {
  try {
    const { email } = req.body;

    const Email = await prisma.emailSubscription.create({
      data: {
        email: email,
        test: true,
      },
    });
    res.status(201).json({
      Succus: "true",
      Subscribe: "Your mail has been Subscribed",
    });
  } catch (err) {
    console.log(err);
    res.send(err.message);
    res
      .status(409)
      .json({ Succus: "false", error: "Your Email is Already Registerted" });
  }
});

app.post("/transaction", async (req, res) => {
  try {
    const { amount, label, type } = req.body;

    const Succuss = await prisma.transactions.create({
      data: {
        amount: amount,
        label: label,
        type,
      },
    });
    res.status(201).json({
      Succuss: true,
      Message: "Your transaction is successfully updated.",
    });
  } catch (err) {
    res.send(err.message || err);
    res.status(400).json({
      Succus: false,
      error: err.message || err,
    });
  }
});

app.listen(PORT, () => {
  console.log("listening on port number " + PORT);
});
