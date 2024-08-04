import { z } from "zod";

export const PersonSchema = z.object({
	name: z.string(),
	surname: z.string(),
	age: z.number().positive(),
	profession: z.string(),
	experience: z.number(),
});

export type TPerson = z.infer<typeof PersonSchema>;
