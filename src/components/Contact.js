import lnImg from "../images/LinkedIn_icon.svg.png";
import fonImg from "../images/phone-call.svg";
import gitImg from "../images/git.png";
export default function Contact() {
	return (
		<section id="contact"
				className="my-40 align-center max-w-5xl mx-auto p-3">
			<h2 className="text-5xl font-bold text-stone-600 text-center">
				Contact
			</h2>
			<div className="flex gap-10 justify-center 
						my-10">
				<a rel="noreferrer"
				target="_blank"
				className="text-center hover:underline"
				href=
"https://www.linkedin.com/in/manoj-anuragi-1a8342192/">
					<img src={lnImg} className="w-8 h-8"/>
					
				</a>
				<a rel="noreferrer"
				target="_blank"
				className="text-center hover:underline flex"
				>
					<img src={fonImg} className="w-7 h-7"/><span>: +918269117014</span>
				</a>
                <a rel="noreferrer"
				target="_blank"
				className="text-center hover:underline flex"
                href="https://github.com/manojanuragi"
				>
					<img src={gitImg} className="w-8 h-8 " />
				</a>
			</div>
		</section>
	);
}
