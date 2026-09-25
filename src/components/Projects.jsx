import { FiExternalLink } from "react-icons/fi";
import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { onCardMouseMove } from "../common/spotlight.js";
import { projects } from "../data/projects.js";

const Projects = () => {
	return (
		<section className="portfolio" id="portfolio">
			<SectionHeading eyebrow="Side Projects" title="Personal" gradientTitle="Projects" />
			<div className="project-grid">
				{projects.map((project, index) => {
					const content = (
						<>
							<img src={project.pic} alt={project.title} />
							<div className="project-overlay">
								<h5>{project.title}</h5>
								<p>{project.description}</p>
								{project.link && <FiExternalLink className="external-icon" />}
							</div>
						</>
					);
					return (
						<Reveal
								key={project.title}
								direction="up"
								delay={0.08 * index}
								className="card card--project"
								onMouseMove={onCardMouseMove}
							>
							{project.link ? (
								<a href={project.link} target="_blank" rel="noopener noreferrer">
									{content}
								</a>
							) : (
								content
							)}
						</Reveal>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
