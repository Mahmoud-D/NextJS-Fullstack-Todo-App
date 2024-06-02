"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodoListAcions = async () => {
  const todoList = await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return todoList;
};

export const createTodoListAcions = async ({
  title,
  body,
  completed,
}: {
  title: string;
  body?: string | undefined;
  completed: boolean;
}) => {
  await prisma.todo.create({
    data: {
      title: title,
      body: body,
      completed: completed,
    },
  });
};

export const updateTodoListAcions = async () => {};

export const deleteTodoListAcions = async () => {};
