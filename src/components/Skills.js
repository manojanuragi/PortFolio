// Skills.js
export default function Skills() {
	const skills = ["Python", "HTML", "CSS", "Javascript", "React", "NextJs", "C", "Node.js","Typesript"];
	return (
		<section id="skills"
			className="px-10 w-full my-40 max-w-5xl mx-auto">
			<h2 className="text-center text-6xl text-stone-600 font-bold">
				My Skills...
			</h2>
			<div className="mt-10 flex gap-5 justify-center 
							flex-wrap mx-auto max-w-xl">
				{skills.map((skill, index) => {
					return (
						<div key={index}
							className="cursor-pointer px-12 py-10 
										rounded bg-stone-200 text-lg 
										flex items-center justify-center 
										font-bold hover:shadow-xl hover:bg-stone-300">
							{skill}
						</div>
					)})}
			</div>
		</section>
	)
}
