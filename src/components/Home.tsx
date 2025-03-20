import type { PortfolioItem } from "@/types/types";
import PortfolioItemBoxes from "./PortfolioItemBoxes/PortfolioItemBoxes";

const Home = () => {
	const portfolioItems: PortfolioItem[] = [];

	//   TODO: temp, must delete
	for (let i = 0; i < 25; i++) {
		const collectionName: string =
			i % 5 === 0
				? "BASTARDS"
				: i % 3 === 0
					? "COLORS"
					: i % 2
						? "VECTORS"
						: "RETREATS";
		const item: PortfolioItem = {
			id: i,
			collection: `${collectionName}`,
			src: `https://picsum.photos/id/${i + 10}/400/300`,
		};
		portfolioItems.push(item);
	}

	return (
		<section className="w-full">
			<section className="grid grid-cols-5 gap-2 mx-24">
				{portfolioItems.map((item, i) => (
					<PortfolioItemBoxes
						key={item.id}
						src={item.src}
						collectionName={item.collection}
					/>
				))}
			</section>
		</section>
	);
};

export default Home;
