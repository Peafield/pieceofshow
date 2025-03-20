"use client";

import { MainNavbarItems } from "@/constants/constants";
import { useDebounce } from "@/hooks/useDebounce";
import { useUiStore } from "@/store/store";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
	const { selectedNavbarItem, setSelectedNavbarItem } = useUiStore();
	const resetNavigation = useDebounce(() => {
		setSelectedNavbarItem("PIECEOFSHOW");
	}, 5000);

	return (
		<nav className="sticky z-50 bg-white top-0 mx-24 h-72 flex items-center justify-right">
			<div
				className="flex flex-col items-start "
				onMouseLeave={resetNavigation}
			>
				{/* Main items */}
				<ul className="flex items-center justify-center">
					{MainNavbarItems.map((item) => (
						<NavbarItem
							key={item.title}
							title={item.title}
							isSelected={selectedNavbarItem.title === item.title}
						/>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
