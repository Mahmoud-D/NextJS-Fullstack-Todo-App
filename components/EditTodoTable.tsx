import EditDialogComponent from "./EditDialogComponent";
import { Ttodo } from "@/types";

export type EditTodoTableProps = {
  todo: Ttodo;
};

const EditTodoTable = ({ todo }: EditTodoTableProps) => {
  const defaultValues: Partial<Ttodo> = {
    title: todo.title,
    body: todo.body,
    completed: todo.completed,
  };

  return (
    <div>
      <EditDialogComponent todo={todo} />
    </div>
  );
};

export default EditTodoTable;
