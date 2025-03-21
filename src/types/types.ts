import { z } from "zod";

export const MainNavbarItemTypeSchema = z.enum([
	"PIECEOFSHOW",
	"IMAGES",
	"ABOUT",
	"SHOP",
	"CONTACT",
]);

export type MainNavbarItemType = z.infer<typeof MainNavbarItemTypeSchema>;

export const CollectionTypeSchema = z.enum([
	"BASTARDS",
	"COLORS",
	"VECTORS",
	"RETREATS",
	"BLACKFLOWERS",
	"PORTRAITS",
	"EDITORIALS",
]);

export type CollectionType = z.infer<typeof CollectionTypeSchema>;

export const MainNavbarItemSchema = z.object({
	title: MainNavbarItemTypeSchema.or(CollectionTypeSchema).or(z.string()),
	isSelected: z.boolean(),
});

export type NavbarItemType = z.infer<typeof MainNavbarItemSchema>;

export const PortfolioItemSchema = z.object({
	id: z.number(),
	collection: CollectionTypeSchema,
	src: z.string(),
});

export type PortfolioItem = z.infer<typeof PortfolioItemSchema>;

export const UISchema = z.object({
	selectedNavbarItem: MainNavbarItemSchema,
	setSelectedNavbarItem: z.function().args(z.string()),
	isImagesExpanded: z.boolean(),
	setIsImagesExpanded: z.function().args(z.boolean()),
	isHoveringANavbarItem: z.boolean(),
	setIsHoveringANavbarItem: z.function().args(z.boolean()),
	isHoveringAPortfolioItem: z.boolean(),
	setIsHoveringAPortfolioItem: z.function().args(z.boolean()),
	//   TODO: Add this back when dealing with indiviual images
	//   selectedPortfolioItem: PortfolioItemSchema.partial(),
	//   setSelectedPortfolioItem: z.function().args(z.number()),
});

export type Ui = z.infer<typeof UISchema>;
