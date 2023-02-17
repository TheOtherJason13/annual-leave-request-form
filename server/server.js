const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8008;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/src/App.tsx", (req, res) => {
  res.json({ info: "got it!" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
