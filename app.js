const express = require("express");
const app = express();
const port = process.env.port || 3000;
const things = require("./routes/things");

app.use(express.json());
app.use("/things", things);


app.get("/", (req, res) => {
  
  res.send("hello root");
});

app.listen(port, err => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port ${port}`);
});