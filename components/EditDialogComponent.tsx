"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Pen } from "lucide-react";
import EditForm from "./forms/EditForm";
import { Ttodo } from "@/types";

const EditDialogComponent = ({ todo }: { todo: Ttodo }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Pen size={16} className="mx-1" />
          Edit Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogDescription>
            Make changes to your Todos here. Click save to update
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <EditForm todo={todo} setOpen={setOpen} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialogComponent;
