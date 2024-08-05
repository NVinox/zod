import { z } from "zod";

export const FormsSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Поле обязательно для заполнения" })
    .email("Валидация Email не пройдена"),
  name: z.string().min(1, { message: "Поле обязательно для заполнения" }),
  age: z
    .number({ message: "Поле должно быть числом" })
    .min(1, { message: "Поле обязательно для заполнения" }),
});

export type TForms = z.infer<typeof FormsSchema>;
