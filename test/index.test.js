const request = require("supertest");
const app = require("../index");
const listaDeTareas = require("../controllers/local.tasks.controller")

describe("testear tareas", () => {
  test("debe traer todas las tareas", async () => {
    const response = await request(app).get("/api/tasks/1");

    expect(response.status).toBe(200);
    expect(response.body.tareas[0]).toEqual({
      completado: true,
      id: 1,
      prioridad_id: 1,
      titulo: "comer una hamburguesa",
      usuario_id: 1,
    });
  });
});

describe("testear status", () => {
  test("status debe ser entre 200 y 300", async () => {
    const response = await request(app).get("/api/tasks");
    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(300);
    });
});

describe("testear tarea", () => {
  test("la tarea completada debe ser True", async () => {
    const response = await request(app).get("/api/tasks/1");
    expect(response.body.tareas[0].completado).toBeTruthy();
    });
});

describe("testear tarea", () => {
  test("la tarea completada debe ser True", async () => {
    const response = await request(app).get("/api/tasks/3");
    expect(response.body.tareas[0].completado).toBeFalsy();
    });
});

describe("testear tarea", () => {
  test("la propiedad debe ser Undefined", async () => {
    const response = await request(app).get("/api/tasks/3");
    expect(response.body.tareas[0].equipoDeFutbol).toBeUndefined();
    });
});

describe("testear tarea", () => {
  test("la tarea debe contener el String hamburguesa", async () => {
    const response = await request(app).get("/api/tasks/1");
    expect(response.body.tareas[0].titulo).toContain("hamburguesa");
    });
});

describe("testear tarea", () => {
  test("el largo del array debe ser 4", async () => {
    const response = await request(app).get("/api/tasks");
    expect(response.body.tareas).toHaveLength(4);
    });
});

describe("testear tarea", () => {
  test("el largo de la propiedad titulo debe ser 28", async () => {
    const response = await request(app).get("/api/tasks/5");
    expect(response.body.tareas[0].titulo).toHaveLength(28);
    });
});

//BONUS

describe("testear tarea", () => {
  test("la propiedad titulo debe contener el string hamburguesa", async () => {
    const response = await request(app).get("/api/tasks/5");
    expect(response.body.tareas[0].titulo).toMatch(/hamburguesa/);
    });
});














