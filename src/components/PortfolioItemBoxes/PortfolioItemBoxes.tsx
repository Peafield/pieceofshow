"use client";

import { useDebounce } from "@/hooks/useDebounce";
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
	const { selectedNavbarItem, setSelectedNavbarItem } = useUiStore();
	const show =
		selectedNavbarItem.title !== collectionName &&
		CollectionTypeSchema.safeParse(selectedNavbarItem.title).success;

	return (
		<div
			className={clsx(
				"aspect-3/2 transition duration-700 ease-in-out cursor-pointer",
				{
					"opacity-20": show,
				},
			)}
			data-collection-name={collectionName}
			onMouseEnter={() => setSelectedNavbarItem(collectionName)}
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
