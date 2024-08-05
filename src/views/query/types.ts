import { z } from "zod";

export const QuerySchema = z.object({
  title: z.string(),
  page: z.string().transform((p) => +p),
});

export type TQuery = z.infer<typeof QuerySchema>;
