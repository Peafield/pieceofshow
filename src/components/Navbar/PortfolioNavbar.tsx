import { portFolioItems } from "@/constants/constants";
import { useUiStore } from "@/store/store";
import { motion } from "motion/react";
import NavbarItem from "./NavbarItem";

const PortfolioNavbar = () => {
	const { selectedNavbarItem } = useUiStore();
	return (
		<motion.ul
			initial={{ opacity: 0, y: 10, height: 0 }}
			animate={{ opacity: 1, y: 0, height: "auto" }}
			exit={{ opacity: 0, y: 10, height: 0 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			className="absolute flex items-center justify-center"
		>
			{portFolioItems.map((item) => (
				<NavbarItem
					key={item.title}
					title={item.title}
					isSelected={selectedNavbarItem.title === item.title}
				/>
			))}
		</motion.ul>
	);
};

export default PortfolioNavbar;
