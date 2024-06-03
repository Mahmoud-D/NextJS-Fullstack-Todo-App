import DialogComponent from "./DialogComponent";

type Tprops = {
  DialogButtonTitle?: string;
  DialogTitleProp: string;
  DialogDescriptionProp: string;
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
}: Tprops): JSX.Element => {
  return (
    <DialogComponent
      DialogDescriptionProp={DialogDescriptionProp}
      DialogButtonTitle={DialogButtonTitle}
      DialogTitleProp={DialogTitleProp}
      defaultTodoValues={defaultTodoValues}
    />
  );
};

export default AddTodo;
