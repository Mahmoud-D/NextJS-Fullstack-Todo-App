/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";

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

import { Pen, Plus } from "lucide-react";
import { Ttodo } from "@/types";

type Tprops = {
  DialogButtonTitle?: string;
  DialogTitleProp: string;
  DialogDescriptionProp: string;
  Icon?: string;
  defaultTodoValues?: Partial<Ttodo>;
};

const DialogComponent = ({
  DialogButtonTitle,
  DialogTitleProp,
  DialogDescriptionProp,
  Icon = "Plus",
  defaultTodoValues,
}: Tprops): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          {Icon == "Plus" ? (
            <Plus size={18} className="mx-1" />
          ) : (
            <Pen size={16} className="mx-1" />
          )}

          {DialogButtonTitle}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{DialogTitleProp}</DialogTitle>
          <DialogDescription>{DialogDescriptionProp}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <TableForm setOpen={setOpen} defaultValues={defaultTodoValues} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
