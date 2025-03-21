import { CollectionTypeSchema, type Ui } from "@/types/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useUiStore = create<Ui>()(
	devtools(
		immer((set) => ({
			selectedNavbarItem: {
				title: "PIECEOFSHOW",
				isSelected: true,
			},
			isImagesExpanded: false,
			setIsImagesExpanded: (value: boolean) => {
				set((state) => {
					state.isImagesExpanded = value;
				});
			},
			setSelectedNavbarItem: (title: string) =>
				set((state) => {
					state.selectedNavbarItem = {
						title,
						isSelected: true,
					};
					if (
						title === "IMAGES" ||
						CollectionTypeSchema.safeParse(title).success
					) {
						state.isImagesExpanded = true;
					} else {
						state.isImagesExpanded = false;
					}
				}),
		})),
	),
);
