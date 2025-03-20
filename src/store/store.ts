import type { Ui } from "@/types/types";
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
			selectedCollectionType: "",
			setSelectedNavbarItem: (title: string) =>
				set((state) => {
					state.selectedNavbarItem = {
						title,
						isSelected: true,
					};
				}),
		})),
	),
);
