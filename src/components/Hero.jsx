import Resume from "../Assets/Resume.pdf";
import Reveal from "../common/Reveal.jsx";
import { useMagnetic } from "../common/useMagnetic.js";

const Hero = () => {
	const primaryBtn = useMagnetic();
	const ghostBtn = useMagnetic();

	return (
		<section className="hero" id="home">
			<Reveal direction="fade" delay={0} className="eyebrow">
				Software Engineer — Full-Stack, Cloud &amp; AI
			</Reveal>

			<Reveal direction="up" delay={0.1}>
				<h1>
					Software Engineer. 
					<br/>
					<span className="grad">Full-stack, cloud, and AI</span>.
				</h1>
			</Reveal>

			<Reveal direction="up" delay={0.2}>
				<p className="lede">
					Software Engineer with 4+ years of experience building full-stack applications, cloud solutions,
					and AI-powered systems. Based in Antibes, France.
				</p>
			</Reveal>

			<Reveal direction="up" delay={0.3} className="btn-row">
				<a
					ref={primaryBtn.ref}
					onMouseMove={primaryBtn.onMouseMove}
					onMouseLeave={primaryBtn.onMouseLeave}
					className="btn primary"
					href="#case-studies"
				>
					See my work
				</a>
				<a
					ref={ghostBtn.ref}
					onMouseMove={ghostBtn.onMouseMove}
					onMouseLeave={ghostBtn.onMouseLeave}
					className="btn ghost"
					href={Resume}
					target="_blank"
					rel="noopener noreferrer"
				>
					Download Resume
				</a>
			</Reveal>
		</section>
	);
};

export default Hero;
