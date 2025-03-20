import { z } from "zod";

export const portfolioItemSchema = z.object({
	collection: z.string(),
	url: z.string(),
});
