import clsx from "clsx";
import PortfolioNavbar from "./PortfolioNavbar";

type NavbarItemProps = {
	title: string;
	isSelected?: boolean;
};

const NavbarItem = ({ title, isSelected }: NavbarItemProps) => {
	return (
		<li
			className={clsx("tracking-[3.5px] font-light text-gray-300 relative", {
				"text-gray-400": isSelected,
			})}
		>
			{title}
			{title === "IMAGES" && <PortfolioNavbar />}
		</li>
	);
};

export default NavbarItem;
