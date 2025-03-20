import { useUiStore } from "@/store/store";
import clsx from "clsx";
import PortfolioNavbar from "./PortfolioNavbar";

type NavbarItemProps = {
	title: string;
	isSelected: boolean;
};

const NavbarItem = ({ title, isSelected }: NavbarItemProps) => {
	const setSelectedNavbarItem = useUiStore(
		(state) => state.setSelectedNavbarItem,
	);
	//   TODO: Grace animation between selection, fade out fade in.
	// TODO: When cursor not on anything, pieceofshow is selected.,
	return (
		<li
			onMouseEnter={() => setSelectedNavbarItem(title)}
			className={clsx(
				"tracking-[3.5px] font-light text-gray-300 relative cursor-pointer",
				{
					"text-gray-400": isSelected,
				},
			)}
		>
			{title}
			{title === "IMAGES" && <PortfolioNavbar />}
		</li>
	);
};

export default NavbarItem;
