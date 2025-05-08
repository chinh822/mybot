const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running 24/7 on Render!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is up on port", port);
});
