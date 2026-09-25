import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { onCardMouseMove } from "../common/spotlight.js";
import { skills } from "../data/skills.js";

const Expertise = () => {
	return (
		<section className="expertise" id="expertise">
			<SectionHeading eyebrow="What I Work With" title="My" gradientTitle="Expertise" />
			<div className="expertise-grid">
				{skills.map((group, index) => (
					<Reveal
						key={group.title}
						direction="up"
						delay={0.05 * index}
						className="expertise-card"
						onMouseMove={onCardMouseMove}
					>
						<h3>{group.title}</h3>
						<ul>
							{group.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</Reveal>
				))}
			</div>
		</section>
	);
};

export default Expertise;
