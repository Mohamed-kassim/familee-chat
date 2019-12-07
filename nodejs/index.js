const Joi = require("joi");
const express = require("express");
const app = express();
var shell = require("shelljs");
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  const { stdout, stderr, code } = shell.exec(
    "bash ../chatbot/shell.sh '" +
      req.body.msg +
      "'",
    {
      silent: true
    }
  );
  console.log(stdout);

  res.send(stdout);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
