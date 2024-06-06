"use client";

import { useState } from "react";

import { updateTodoListAcions } from "@/actions/todo.actions";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todosSchema, Todos } from "@/validations/index";

import { Ttodo } from "@/types";

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

type IType = {
  todo: Partial<Ttodo>;
  setOpen: (value: boolean) => void;
};

const EditForm = ({ todo, setOpen }: IType) => {
  const [loading, setLoading] = useState(false);

  const defaultValues: Partial<Todos> = {
    title: todo.title,
    body: todo.body as string,
    completed: todo.completed ?? false,
  };

  const formMethods = useForm<Todos>({
    resolver: zodResolver(todosSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async (data: Todos) => {
    setLoading(true);
    await updateTodoListAcions({
      id: todo.id ?? "",
      title: data.title,
      body: data.body as string,
      completed: data.completed || false,
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

export default EditForm;
