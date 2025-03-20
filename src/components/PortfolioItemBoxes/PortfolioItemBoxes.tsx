interface PortfolioItemBoxesProps {
	collectionName: string;
	src: string;
}

const PortfolioItemBoxes = ({
	collectionName,
	src,
}: PortfolioItemBoxesProps) => {
	return (
		<div className="aspect-3/2" data-collection-name={collectionName}>
			<img
				src={src}
				alt="random"
				className="aspect-3/2 object-cover opacity-80"
			/>
		</div>
	);
};

export default PortfolioItemBoxes;
