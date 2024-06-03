import { Ttodo } from "@/types";
import Dialog from "./DialogComponent";

type EditTodoTableProps = {
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
      <Dialog
        DialogTitleProp="Edit Todo"
        DialogDescriptionProp="You can Edit Your Todo"
        Icon={"Pen"}
        defaultTodoValues={defaultValues}
      />
    </div>
  );
};

export default EditTodoTable;
