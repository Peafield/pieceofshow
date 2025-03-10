import type { NavbarItemType } from "@/types/types";
import NavbarItem from "./NavbarItem";

const PortfolioNavbar = () => {
	const portFolioItems: NavbarItemType[] = [
		{ title: "BASTARDS", isSelected: false },
		{ title: "COLORS", isSelected: false },
		{ title: "VECTORS", isSelected: false },
		{ title: "RETREATS", isSelected: false },
		{ title: "BLACKFLOWERS", isSelected: false },
		{ title: "PORTRAITS", isSelected: false },
		{ title: "EDITORIALS", isSelected: false },
	];
	return (
		<ul className="absolute hidden">
			{portFolioItems.map((item, index) => (
				<NavbarItem
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					title={item.title}
					isSelected={item.isSelected}
				/>
			))}
		</ul>
	);
};

export default PortfolioNavbar;
