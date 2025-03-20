import type { CollectionType, PortfolioItem } from "@/types/types";
import PortfolioItemBoxes from "./PortfolioItemBoxes/PortfolioItemBoxes";

const Home = () => {
	const portfolioItems: PortfolioItem[] = [];

	//   TODO: temp, must delete
	for (let i = 0; i < 25; i++) {
		const collectionName: CollectionType =
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

	// TODO: Highlight all images of the same collection when clicking on one image

	return (
		<section className="w-full">
			<section className="grid grid-cols-5 gap-2 mx-24">
				{portfolioItems.map((item) => (
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
