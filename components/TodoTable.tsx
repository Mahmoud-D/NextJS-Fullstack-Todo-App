"use client ";

import moment from "moment";
import TodosTableActions from "./TodosTableActions";
import { Ttodo } from "@/types";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";

const TodoTable = ({ todos }: { todos: Ttodo[] }) => {
  return (
    <Table>
      <TableCaption>A list of your todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className=" ">
        {todos.map((todo, index) => (
          <TableRow className="bg-red-800   " key={todo?.id}>
            <TableCell className="font-medium ">{index + 1}</TableCell>
            <TableCell className={todo.completed ? "line-through" : ""}>
              {todo?.title}
            </TableCell>
            <TableCell>
              {todo?.completed ? (
                <Badge>completed</Badge>
              ) : (
                <Badge variant="secondary">uncompleted</Badge>
              )}
            </TableCell>
            <TableCell>{moment(todo.createdAt).format("DD-MM-YYYY")}</TableCell>
            <TableCell className="flex items-center justify-end space-x-2">
              <TodosTableActions todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">
            <Badge>{todos.length}</Badge>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TodoTable;
