import { portFolioItems } from "@/constants/constants";
import type { NavbarItemType } from "@/types/types";
import NavbarItem from "./NavbarItem";

const PortfolioNavbar = () => {
	return (
		<ul className="absolute hidden">
			{portFolioItems.map((item) => (
				<NavbarItem
					key={item.title}
					title={item.title}
					isSelected={item.isSelected}
				/>
			))}
		</ul>
	);
};

export default PortfolioNavbar;
