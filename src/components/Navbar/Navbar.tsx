"use client";

import type { NavbarItemType } from "@/types/types";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
	const mainItems: NavbarItemType[] = [
		{ title: "PIECEOFSHOW", isSelected: true },
		{ title: "IMAGES", isSelected: false },
		{ title: "ABOUT", isSelected: false },
		{ title: "SHOP", isSelected: false },
		{ title: "CONTACT", isSelected: false },
	];

	return (
		<nav className="stick top-0 mx-24 h-72 flex items-center justify-right">
			<div className="flex flex-col items-start">
				{/* Main items */}
				<ul className="flex items-center justify-center">
					{mainItems.map((item, index) => (
						<NavbarItem
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							title={item.title}
							isSelected={item.isSelected}
						/>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
