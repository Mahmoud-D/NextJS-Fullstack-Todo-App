/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";

import { Ttodo } from "@/types";

import TableForm from "./forms/Form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type Tprops = {
  DialogButtonTitle?: string;
  DialogTitleProp: string;
  DialogDescriptionProp: string;
  defaultTodoValues?: Partial<Ttodo>;
  userId: string | null;
};

const DialogComponent = ({
  DialogButtonTitle,
  DialogTitleProp,
  DialogDescriptionProp,
  defaultTodoValues,
  userId,
}: Tprops) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus size={18} className="mx-1" />
          {DialogButtonTitle}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{DialogTitleProp}</DialogTitle>
          <DialogDescription>{DialogDescriptionProp}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <TableForm
            setOpen={setOpen}
            defaultValues={defaultTodoValues}
            userId={userId}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
