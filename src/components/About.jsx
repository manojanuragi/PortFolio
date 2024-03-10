import Img from "../images/manoj_hero.jpg"
export default function About() {
	return (
		<section
			id="about"
			className="px-10 w-full flex flex-col lg:flex-row py-20 
					align-center bg-stone-200 max-w-5xl mx-auto">
			<div className="flex-1">
				<img src={Img}
					alt="About"
					className="w-full h-full bg-cover rounded-3xl border-4 p-1 border-stone-700"/>
			</div>
			<div className="flex-1 flex flex-col justify-center
							items-center gap-5 px-6">
				<div>
					<h2 className="text-center text-stone-600 
								text-5xl font-bold">
						About Me :
					</h2>
				</div>
				<p>
					As I said, I am your friendly
					neighbourhood osm developer...
				</p>
				<p>
                Hello there! I'm Manoj Anuragi, a passionate and results-driven Frontend React Developer with a keen eye for detail and a love for creating seamless, user-friendly experiences. My journey into the world of web development began with a fascination for turning ideas into interactive and visually appealing digital solutions
				</p>
			</div>
		</section>
	);
}
