const express = require("express");
const app = express();
app.use(express.json());
const { schema } = require("../middlewares/tasks.validations");

const validation = async (req, resp, next, schema ) => {
    try {
      await schema.validate(req.body, { strict: true });
      next();
    } catch (error) {
      resp.json({ error: error.errors });
    }
  };

/* app.post("/user", validation(schema), async (req, res) => {
    try {
      res.json({ mensaje: "todo ok" });
    } catch (error) {
      res.json({ error: error.errors });
    }
  }); */

