import pic from "../Assets/picture.png";
import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

const About = () => {
	return (
		<section className="about" id="about">
			<SectionHeading title="About" gradientTitle="Me" />
			<div className="about-content">
				<Reveal direction="left">
					<div className="about-img">
						<img src={pic} alt="Ahmed Sahnoun" />
					</div>
				</Reveal>
				<Reveal direction="right" delay={0.1}>
					<div className="about-text">
						<h4>Software Engineer — Full-Stack, Cloud &amp; AI-Enabled Solutions</h4>
						<p>
							I'm a Software Engineer with 4+ years delivering enterprise and client-facing solutions
							end-to-end, from technical discovery and architecture through implementation, cloud
							deployment and production support.
						</p>
						<p>
							My work spans full-stack development, Azure cloud infrastructure, and applied AI
							(computer vision, NLP, GenAI) — including unifying fragmented multi-vendor systems into
							single, production-grade platforms. I'm comfortable owning ambiguous technical problems
							directly with clients and translating operational constraints into shipped software.
						</p>
					</div>
				</Reveal>
			</div>
		</section>
	);
};

export default About;
