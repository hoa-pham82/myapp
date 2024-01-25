const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("listing on " + PORT);
});

app.get("/", (req, res) => {
  res.send({ ok: false });
});
