const express = require("express");
const app = express();
app.use(express.json());
const { object, string, number } = require("yup");

exports.schema = object({
    titulo: string()
        .typeError("titulo debe ser un string")
         .required("titulo no puede estar en blanco"),
    usuario_id: number()
        .required("el campo usuario es requerido")
        .typeError("el campo usuario_id debe ser un numero")
        .positive("debe ser un numero positivo")
  });

exports.validation = async (req, resp, next, schema ) => {
    try {
      await schema.validate(req.body, { strict: true });
      next();
    } catch (error) {
      resp.json({ error: error.errors });
    }
  };
