import DialogComponent from "./DialogComponent";

type Tprops = {
  DialogButtonTitle?: string;
  DialogTitleProp: string;
  DialogDescriptionProp: string;
  userId: string | null;
};
const defaultTodoValues = {
  title: "First Todo",
  body: "First Todo Description",
  completed: false,
};

const AddTodo = ({
  DialogButtonTitle,
  DialogTitleProp,
  DialogDescriptionProp,
  userId,
}: Tprops): JSX.Element => {
  return (
    <DialogComponent
      DialogDescriptionProp={DialogDescriptionProp}
      DialogButtonTitle={DialogButtonTitle}
      DialogTitleProp={DialogTitleProp}
      defaultTodoValues={defaultTodoValues}
      userId={userId}
    />
  );
};

export default AddTodo;
