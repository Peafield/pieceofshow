import { useUiStore } from "@/store/store";
import clsx from "clsx";
import { AnimatePresence } from "motion/react";
import PortfolioNavbar from "./PortfolioNavbar";

type NavbarItemProps = {
	title: string;
	isSelected: boolean;
};

const NavbarItem = ({ title, isSelected }: NavbarItemProps) => {
	const { isImagesExpanded, setSelectedNavbarItem } = useUiStore();
	return (
		<li
			onMouseEnter={() => setSelectedNavbarItem(title)}
			className={clsx(
				"tracking-[3.5px] font-light text-gray-300 relative cursor-pointer transition duration-700 ease-in-out",
				{
					"text-gray-400":
						isSelected || (title === "IMAGES" && isImagesExpanded),
				},
			)}
		>
			{title}
			<AnimatePresence>
				{title === "IMAGES" && isImagesExpanded && <PortfolioNavbar />}
			</AnimatePresence>
		</li>
	);
};

export default NavbarItem;
