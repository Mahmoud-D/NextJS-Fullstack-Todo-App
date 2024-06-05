"use server";
import { auth } from "@clerk/nextjs/server";
import { getTodoListAcions } from "@/actions/todo.actions";

import AddTodo from "@/components/AddTodo";
import TodoTable from "@/components/TodoTable";

export default async function Home() {
  const { userId } = auth();
  const todos = await getTodoListAcions({ userId });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddTodo
        DialogDescriptionProp=" Make changes to your Todos here. Click save to update"
        DialogButtonTitle="New Todo"
        DialogTitleProp="New Todo"
        userId={userId}
      />
      <TodoTable todos={todos} />
    </main>
  );
}
