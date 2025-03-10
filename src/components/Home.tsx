const Home = () => {
	const imageBoxes = [];
	for (let i = 0; i < 25; i++) {
		const randomImage = "https://picsum.photos/400/300";
		imageBoxes.push(
			<div className="aspect-3/2">
				<img
					src={randomImage}
					alt="random"
					className="aspect-3/2 object-cover opacity-80"
				/>
			</div>,
		);
	}
	return (
		<section className="w-full">
			<section className="grid grid-cols-5 gap-2 mx-24">
				{imageBoxes.map((box, index) => box)}
			</section>
		</section>
	);
};

export default Home;
