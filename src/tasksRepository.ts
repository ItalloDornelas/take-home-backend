import { PrismaClient } from "@prisma/client";

type Tasks = {
  title: string;
  completed: boolean;
  color: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const prisma = new PrismaClient();

const connect = async () => await prisma.$connect();

connect();

export const getTasks = async () => {
  const tasks = await prisma.tasks.findMany();
  return tasks;
};

export const getTask = async (id: string) => {
  const task = await prisma.tasks.findUnique({
    where: { id },
  });
  return task;
};

export const createTask = async (task: Tasks) => {
  const newTask = await prisma.tasks.create({
    data: task,
  });
  return newTask;
};

export const updateTask = async (id: string, task: Tasks) => {
  const updatedTask = await prisma.tasks.update({
    where: { id },
    data: task,
  });
  return updatedTask;
};

export const deleteTask = async (id: string) => {
  const deletedTask = await prisma.tasks.delete({
    where: { id },
  });
  return deletedTask;
};
