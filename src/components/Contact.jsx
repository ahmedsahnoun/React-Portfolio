import { FaLinkedin, FaGithub } from "react-icons/fa";
import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

const Contact = () => {
	return (
		<section className="contact" id="contact">
			<SectionHeading eyebrow="Get In Touch" title="Contact" gradientTitle="Me" />
			<div className="contact-grid">
				<Reveal direction="left">
					<div className="contact-text">
						<p>
							If you have a project in mind and are looking to collaborate, or if any of my skills
							interest you, feel free to reach out.
						</p>
						<ul className="contact-list">
							<li><a href="tel:+33667481052">+33 6 67 48 10 52</a></li>
							<li><a href="mailto:ahmed.sahnoun.124@gmail.com">ahmed.sahnoun.124@gmail.com</a></li>
						</ul>
						<div className="contact-icons">
							<a title="LinkedIn" href="https://www.linkedin.com/in/ahmed-sahnoun-9681b122/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
							<a title="GitHub" href="https://github.com/ahmedsahnoun" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
						</div>
					</div>
				</Reveal>
				<Reveal direction="right" delay={0.1}>
					<form className="contact-form" action="https://formsubmit.co/ahmed.sahnoun.124@gmail.com" method="POST">
						<input name="name" placeholder="Your Name" required />
						<input name="email" placeholder="Your Email Address" required />
						<textarea name="details" rows="6" placeholder="How can I help you?" required></textarea>
						<button type="submit" className="btn primary">Send Message</button>
					</form>
				</Reveal>
			</div>
		</section>
	);
};

export default Contact;
