import request from "supertest";
import { app } from "../tasksApi";

describe("Tasks API", () => {
  let createdTaskId: string;
  it("should create a new task", async () => {
    const response = await request(app).post("/tasks").send({
      title: "test 1",
      color: "#ff0000",
      completed: false,
    });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    createdTaskId = response.body.id;
  });

  it("should dont create a new task without title", async () => {
    const response = await request(app).post("/tasks").send({
      color: "#ff0000",
      completed: false,
    });
    expect(response.statusCode).toBe(404);
  });

  it("should fetch all tasks", async () => {
    const response = await request(app).get("/tasks");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should update a task", async () => {
    const response = await request(app).patch(`/tasks/${createdTaskId}`).send({
      title: "Updated Task",
      color: "#ff0075",
      completed: true,
    });
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: createdTaskId,
      title: "Updated Task",
      color: "#ff0075",
      completed: true,
    });
  });

  it("should delete a task", async () => {
    const response = await request(app).delete(`/tasks/${createdTaskId}`);
    expect(response.status).toBe(200);
  });
});
