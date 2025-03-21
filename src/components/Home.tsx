import {
	type CollectionType,
	CollectionTypeSchema,
	type PortfolioItem,
} from "@/types/types";
import PortfolioItemBoxes from "./PortfolioItemBoxes/PortfolioItemBoxes";

const Home = () => {
	// TODO: Must eventually delete. Just for testing
	const portfolioItems: PortfolioItem[] = [];
	const collectionTypes: CollectionType[] = Object.values(
		CollectionTypeSchema.enum,
	);
	const distributedCollections = collectionTypes.flatMap((type) =>
		Array(Math.floor(25 / collectionTypes.length)).fill(type),
	);

	const remaining = 25 - distributedCollections.length;
	for (let i = 0; i < remaining; i++) {
		distributedCollections.push(collectionTypes[i]);
	}
	const shuffledCollections = [...distributedCollections].sort(
		() => Math.random() - 0.5,
	);
	for (let i = 1; i <= 25; i++) {
		const item: PortfolioItem = {
			id: i,
			collection: shuffledCollections[i - 1],
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
