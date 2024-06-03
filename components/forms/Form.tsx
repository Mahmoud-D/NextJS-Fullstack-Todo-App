"use client";

import { useState } from "react";

import { createTodoListAcions } from "@/actions/todo.actions";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todosSchema, Todos } from "@/validations/index";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import Spinner from "../Spinner";
import { Ttodo } from "@/types";

type Itype = {
  setOpen: (value: boolean) => void;
  defaultValues?: Partial<Ttodo>;
};
const TableForm = ({ setOpen, defaultValues }: Itype) => {
  const [loading, setLoading] = useState(false);

  const formMethods = useForm<Todos>({
    resolver: zodResolver(todosSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async (data: Todos) => {
    setLoading(true);

    await createTodoListAcions({
      title: data.title,
      body: data.body,
      completed: data.completed,
    });
    setLoading(false);
    setOpen(false);
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className=" flex flex-col space-y-8"
      >
        <FormField
          control={formMethods.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formMethods.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  placeholder="Description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formMethods.control}
          name="completed"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Completed</FormLabel>
              </div>
              <FormDescription>
                Your to-do item will be uncompleted by default unless you
                checked it.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="space-x-2" disabled={loading}>
          {loading ? (
            <>
              <Spinner /> Saving
            </>
          ) : (
            "Save"
          )}
        </Button>
      </form>
    </FormProvider>
  );
};

export default TableForm;
