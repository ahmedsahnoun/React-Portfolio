import { FiCloud, FiEye, FiShield } from "react-icons/fi";
import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { onCardMouseMove } from "../common/spotlight.js";
import { caseStudies } from "../data/caseStudies.js";

const ICONS = {
	cloud: FiCloud,
	vision: FiEye,
	security: FiShield,
};

const CaseStudies = () => {
	return (
		<section className="case-studies" id="case-studies">
			<SectionHeading eyebrow="Professional Work" title="Featured" gradientTitle="Case Studies" />
			<div className="case-study-list">
				{caseStudies.map((study, index) => {
					const Icon = ICONS[study.icon];
					return (
						<Reveal
								key={study.id}
								direction="up"
								delay={0.1 * index}
								className="card card--case-study"
								onMouseMove={onCardMouseMove}
							>
							<div className="card-text">
								<span className="tag">{study.tag}</span>
								<h3>{study.title}</h3>
								<p>{study.description}</p>
								{study.stack.length > 0 && (
									<div className="stack-badges">
										{study.stack.map((tech) => (
											<span key={tech} className="badge">{tech}</span>
										))}
									</div>
								)}
								{study.stats.length > 0 && (
									<div className="stats">
										{study.stats.map((stat) => (
											<div className="stat" key={stat.label}>
												<b>{stat.value}</b>
												<span>{stat.label}</span>
											</div>
										))}
									</div>
								)}
							</div>
							<div className={`visual visual--${study.icon}`}>
								<Icon />
							</div>
						</Reveal>
					);
				})}
			</div>
		</section>
	);
};

export default CaseStudies;
