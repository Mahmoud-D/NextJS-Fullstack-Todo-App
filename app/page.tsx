import { getTodoListAcions } from "@/actions/todo.actions";

import AddTodo from "@/components/AddTodo";
import TodoTable from "@/components/TodoTable";

export default async function Home() {
  const todos = await getTodoListAcions();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddTodo
        DialogDescriptionProp=" Make changes to your Todos here. Click save to update"
        DialogButtonTitle="New Todo"
        DialogTitleProp="New Todo"
      />
      <TodoTable todos={todos} />
    </main>
  );
}
