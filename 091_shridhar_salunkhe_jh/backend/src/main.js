const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { selectmsg, addmsg } = require("./user");

app.get("/msgs", async (req, res) => {
  const list = await selectmsg();
  res.json(list);
});

app.post("/addmsg", async (req, res) => {
  const user = req.body;
  await addmsg(user);
  res.json({ messege: "msg added successfully..." });
});

app.listen(5000, () => console.log("server started..."));
