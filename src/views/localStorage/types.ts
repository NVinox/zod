import { z } from "zod";

export const PersonSchema = z.object({
  name: z.string(),
  surname: z.string(),
  age: z.number().positive(),
});

export type TPerson = z.infer<typeof PersonSchema>;
