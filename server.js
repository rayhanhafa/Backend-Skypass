require("dotenv").config();
const app = require("./bin/app");
const jobs = require("./jobs");

const port = process.env.PORT || 8000;

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
  jobs()
});
