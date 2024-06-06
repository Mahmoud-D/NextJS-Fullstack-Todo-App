"use client";

import { useState } from "react";

import { deleteTodoListActions } from "@/actions/todo.actions";

import EditTodoTable from "./EditTodoTable";

import Spinner from "./Spinner";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

import { Ttodo } from "@/types";

type TodosTableActionsProps = Ttodo;

const TodosTableActions = ({ todo }: { todo: TodosTableActionsProps }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex gap-1 ">
      <EditTodoTable todo={todo} />

      <Button
        size={"icon"}
        variant={"destructive"}
        className="p-2  text-white rounded-md"
        onClick={async () => {
          setLoading(true);
          await deleteTodoListActions({ id: todo.id });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </div>
  );
};

export default TodosTableActions;
