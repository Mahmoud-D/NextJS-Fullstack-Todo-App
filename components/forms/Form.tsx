"use client";

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

const defaultValues: Partial<Todos> = {
  title: "First Todo",
  body: "First Todo Description",
};

const TableForm = () => {
  const formMethods = useForm<Todos>({
    resolver: zodResolver(todosSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async (data: Todos) => {
    await createTodoListAcions({
      title: data.title,
      body: data.body,
    });
    console.log(data.title);
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
              <FormDescription>This is your Todo name.</FormDescription>
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
              <FormDescription>This is your Todo Description.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="size-min mx-auto " type="submit">
          Add To List
        </Button>
      </form>
    </FormProvider>
  );
};

export default TableForm;
