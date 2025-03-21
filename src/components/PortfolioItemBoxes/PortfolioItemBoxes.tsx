"use client";

import { useUiStore } from "@/store/store";
import { CollectionTypeSchema } from "@/types/types";
import clsx from "clsx";

interface PortfolioItemBoxesProps {
	imageId: number;
	collectionName: string;
	src: string;
}

const PortfolioItemBoxes = ({
	imageId,
	collectionName,
	src,
}: PortfolioItemBoxesProps) => {
	const {
		selectedNavbarItem,
		setSelectedNavbarItem,
		setIsHoveringAPortfolioItem,
	} = useUiStore();
	const show =
		selectedNavbarItem.title !== collectionName &&
		CollectionTypeSchema.safeParse(selectedNavbarItem.title).success;

	const handleMouseEnter = () => {
		setIsHoveringAPortfolioItem(true);
		setSelectedNavbarItem(collectionName);
	};

	const handleMouseLeave = () => {
		setIsHoveringAPortfolioItem(false);
		const timeoutId = setTimeout(() => {
			if (!useUiStore.getState().isHoveringAPortfolioItem) {
				setSelectedNavbarItem("PIECEOFSHOW");
			}
		}, 2000);
		return () => clearTimeout(timeoutId);
	};

	return (
		<div
			className={clsx(
				"aspect-3/2 transition duration-700 ease-in-out cursor-pointer",
				{
					"opacity-20": show,
				},
			)}
			data-collection-name={collectionName}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
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
