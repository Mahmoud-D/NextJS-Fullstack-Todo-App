/* eslint-disable react/no-unescaped-entities */
"use client";
import TableForm from "./forms/Form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Plus } from "lucide-react";

const AddTodo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus size={18} className="mx-1" />
          New Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New todo</DialogTitle>
          <DialogDescription>
            Make changes to your Todos here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <TableForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodo;
