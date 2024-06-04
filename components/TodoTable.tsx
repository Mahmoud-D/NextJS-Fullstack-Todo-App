"use client ";

import TodosTableActions from "./TodosTableActions";
import { Ttodo } from "@/types";

import {
  Table,
  TableBody,
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
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>
              {todo.completed ? (
                <Badge>completed</Badge>
              ) : (
                <Badge variant="secondary">uncompleted</Badge>
              )}
            </TableCell>
            <TableCell className=" flex gap-2 justify-end ">
              <TodosTableActions todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell> {todos.length} </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TodoTable;
