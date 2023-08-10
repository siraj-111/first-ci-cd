const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.json({ message: "welcome to CI/CD codePipeline using AWS" });
});

app.get("/about", (req, res) => {
  res.json({ message: "this is about page" });
});
app.listen(3000, () => console.log(`server listening one ${3000}`));
