"use server";
import { auth } from "@clerk/nextjs/server";
import { getTodoListAcions } from "@/actions/todo.actions";

import AddTodo from "@/components/AddTodo";
import TodoTable from "@/components/TodoTable";

export default async function Home() {
  const { userId } = auth();
  const todos = await getTodoListAcions({ userId });
  return (
    <main className="container">
      <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4 mt-10">
        <AddTodo
          DialogDescriptionProp=" Make changes to your Todos here. Click save to update"
          DialogButtonTitle="New Todo"
          DialogTitleProp="New Todo"
          userId={userId}
        />
        <TodoTable todos={todos} />
      </div>
    </main>
  );
}
