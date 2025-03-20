import { z } from "zod";

export type NavbarItemType = {
	title: string;
	isSelected: boolean;
};

export const PortfolioItemSchema = z.object({
	id: z.number(),
	collection: z.string(),
	src: z.string(),
});

export type PortfolioItem = z.infer<typeof PortfolioItemSchema>;
