import { z } from "zod";

export const ApiSchema = z.object({
	id: z.number().positive(),
	title: z.string(),
	description: z.string(),
	selected: z.boolean(),
});

export type TApi = z.infer<typeof ApiSchema>;
