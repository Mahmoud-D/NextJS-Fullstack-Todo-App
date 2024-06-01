"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodoListAcions = async () => {
  const todoList = await prisma.todo.findMany();
  return todoList;
};

export const createTodoListAcions = async ({
  title,
  body,
}: {
  title: string;
  body?: string | undefined;
}) => {
  await prisma.todo.create({
    data: {
      title: title,
      body: body,
    },
  });
};

export const updateTodoListAcions = async () => {};

export const deleteTodoListAcions = async () => {};
