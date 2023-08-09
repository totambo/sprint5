const {knex} = require("../db/index");

// En este archivo estan los controladores de las tareas de la base de datos.

exports.tasks = async (req, res) => {
    const tareas = await knex.select("*").from("tarea");
    res.status(200);
    res.json({ tareas });
};

exports.taskById = async (req, res) => {
    const tareas = await knex.select("*").from("tarea").where({id : req.params.id});
    if (tareas.length === 0) {
        res.status(404);
        res.json({ response: "not found"})
    } else { 
    res.status(200);
    res.json({ tareas });}
};

exports.newTask = async (req, res) => {
    const tareas = await knex("tarea").insert(req.body, '*');
    res.status(200);
    res.json(tareas[0]);
};

exports.updateTaskById =  async (req, res) => {
    const tareas = await knex("tarea").where({id : req.params.id}).update(req.body, '*');
    res.status(200);
    res.json(tareas[0])
};

exports.deleteTask = async(req, res) => {
    await knex("tarea").where({id : req.params.id}).del()
    const tareas = await knex.select("*").from("tarea");
    res.status(200);
    res.json({ tareas })
};