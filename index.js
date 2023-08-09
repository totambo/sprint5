const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const routes = require("./routes/tareas.routes");


app.use("/api", routes);


app.listen(port, () => {
  console.log(`Port ${port}`);
});

module.exports = app;
/*"test": "echo \"Error: no test specified\" && exit 1"*/