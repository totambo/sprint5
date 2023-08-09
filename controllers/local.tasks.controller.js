const { tarea } = require("./tasks.controller")

// En este archivo estan los controladores de las tareas que estan escritas aca mismo
// y no en la base de datos.

exports.listaDeTareas = [
    {
      titulo: "Task 1",
      id: 1,
      prioridad_id: 1,
      usuario_id: 1,
      completado: true,
    },
    {
      titulo: "Task 2",
      id: 2,
      prioridad_id: 1,
      usuario_id: 1,
      completado: false,
    },
  ];


exports.localTasks = async (req, res) => {
    res.status(500);
    res.json({ listaDeTareas });
  };

exports.newLocalTask = async (req, res) => {
    listaDeTareas.push(req.body);
    res.json({ listaDeTareas });
    res.status(500);
  };

exports.updateLocalTaskById =  async (req, res) => {
    const findId = listaDeTareas.findIndex((p) => p.id === Number(req.params.id));
    if (findId === -1) {
        res.status(404);
        res.json({ mensaje: "tarea no encontrada"})
    }
    res.status(200);
    listaDeTareas[findId]=req.body;
    res.json({ listaDeTareas })
;}
