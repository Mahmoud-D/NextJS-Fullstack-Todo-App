import { z } from "zod";

export const todosSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters",
    })
    .max(50, { message: "Title must not exceed 50 characters" }),
  body: z
    .string()
    .min(10, {
      message: "Body must be at least 10 characters",
    })
    .max(80, { message: "Body must not exceed 50 characters" })
    .optional(),
  completed: z.boolean().optional(),
});

export type Todos = z.infer<typeof todosSchema>;
