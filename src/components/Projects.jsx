import tictactoe from "../Assets/tictactoe.png"
import pfe from "../Assets/PFE.png"
import epos from "../Assets/EPOS.png"
import dealabs from "../Assets/Dealabs.png"
import plinko from "../Assets/plinko.png"
import Chatsrevenge from "../Assets/Chatsrevenge.png"
import { motion } from "framer-motion"

const project = (details, index) => {
	return (
		<motion.div
			key={index}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.1 * index }}
			variants={{
				visible: { opacity: 1, x: 0 },
				hidden: { opacity: 0, x: -70 }
			}}
		>
			<div className="row">
				<a
					style={{ color: "inherit" }}
					href={details.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={details.pic} alt="" />
					<div className="layer">
						<h5>{details.title}</h5>
						<p>{details.description}</p>
						{details.link ? <i className='bx bx-link-external'></i> : ""}
					</div>
				</a>
			</div>
		</motion.div>
	)
}

const list = [
	{
		title: "Job Candidate Search App",
		description: "An app that uses web scraping and natural language processing to collect candidate" +
			" profiles and determine the best fit for a job",
		pic: pfe,
		link: "https://github.com/ahmedsahnoun/PFE"
	},
	{
		title: "TicTacToe",
		description: "A simple TicTacToe game to test the efficiency of different game algorithms",
		pic: tictactoe,
		link: "https://github.com/ahmedsahnoun/Tic-Tac-Toe"
	},
	{
		title: "EPOS Converter",
		description: "A windows app that converts between multiple Electronic Point of Service Protocols",
		pic: epos,
		link: "https://github.com/ahmedsahnoun/EPOS_Converter"
	},
	{
		title: "Dealabs Discord Bot",
		description: "A Discord bot that allows the monitoring of deals on the website Dealabs.",
		pic: dealabs,
		link: "https://github.com/ahmedsahnoun/Dealabs-Discord-Bot"
	},
	{
		title: "Plinko Twitch Overlay",
		description: "A Twitch overlay that triggers automatically with events and drops plinko balls on stream for potential rewards.",
		pic: plinko,
	},
	{
		title: "Twitch extension",
		description: "A Twitch extension that allows viewers to execute command on the streamer's PC for money.",
		pic: Chatsrevenge,
		link: "https://dashboard.twitch.tv/extensions/6fwhzhvt0ljihf9o1vzvjfp12jvkax"
	},
]

const Projects = () => {
	return (
		<>
			<section className="portfolio" id="portfolio">
				<div className="main-text">
					<p>Portfolio</p>
					<h2><span>Latest</span> Projects</h2>
				</div>
				<div className="portfolio-content">
					{list.map((x, index) => project(x, index))}
				</div>
			</section>
		</>
	);
}

export default Projects;