"use server";

import { Ttodo } from "@/types";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getTodoListAcions = async () => {
  const todoList = await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return todoList.map((todo) => ({
    ...todo,
    body: todo.body ?? undefined,
  }));
};

export const createTodoListAcions = async ({
  title,
  body,
  completed,
}: {
  title: string;
  body?: string;
  completed: boolean | undefined;
}) => {
  await prisma.todo.create({
    data: {
      title: title,
      body: body,
      completed: completed,
    },
  });
  revalidatePath("/");
};

export const updateTodoListAcions = async ({
  id,
  title,
  body,
  completed,
}: Ttodo): Promise<void> => {
  try {
    await prisma.todo.update({
      where: {
        id,
      },
      data: {
        title,
        body,
        completed: completed ?? false,
      },
    });

    revalidatePath("/");
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const deleteTodoListActions = async ({
  id,
}: {
  id: string;
}): Promise<void> => {
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
};
