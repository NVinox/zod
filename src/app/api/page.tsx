import { z } from "zod";

import { ApiPage } from "@/views/api/ui/ApiPage";

import { ApiSchema, TApi } from "@/views/api/types";

const TODOS = [
  {
    id: 1,
    title: "Frontend смотр",
    description: "Рассказать презентацию zod",
    selected: true,
  },
  {
    id: 2,
    title: "Стендап",
    description: "Принять участие в стендапе",
    selected: false,
  },
  {
    id: 3,
    title: "Работа",
    description: "Отработать день",
    selected: false,
  },
  {
    id: 4,
    title: "Зарплата",
    description: "Получить зарплату",
    selected: false,
  },
];

async function getTodos(): Promise<TApi[]> {
  const todos = await new Promise<TApi[]>((resolve) => {
    setTimeout(() => {
      resolve(TODOS);
    }, 300);
  });

  return todos;
}

export default async function API() {
  const todos: TApi[] = await getTodos();
  const { error } = z.array(ApiSchema).safeParse(todos);

  return <ApiPage data={error?.message || todos} />;
}
