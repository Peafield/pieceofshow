"use client";

import { useUiStore } from "@/store/store";
import { CollectionTypeSchema } from "@/types/types";
import clsx from "clsx";

interface PortfolioItemBoxesProps {
	collectionName: string;
	src: string;
}

const PortfolioItemBoxes = ({
	collectionName,
	src,
}: PortfolioItemBoxesProps) => {
	const { selectedNavbarItem } = useUiStore();
	const show =
		selectedNavbarItem.title !== collectionName &&
		CollectionTypeSchema.safeParse(selectedNavbarItem.title).success;
	return (
		<div
			className={clsx("aspect-3/2 transition duration-700 ease-in-out", {
				"opacity-20": show,
			})}
			data-collection-name={collectionName}
		>
			<img
				src={src}
				alt="random"
				className="aspect-3/2 object-cover opacity-80"
			/>
		</div>
	);
};

export default PortfolioItemBoxes;
