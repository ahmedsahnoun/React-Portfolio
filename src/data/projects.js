import tictactoe from "../Assets/tictactoe.png";
import pfe from "../Assets/PFE.png";
import epos from "../Assets/EPOS.png";
import dealabs from "../Assets/Dealabs.png";
import plinko from "../Assets/plinko.png";
import chatsrevenge from "../Assets/Chatsrevenge.png";

export const projects = [
	{
		title: "Job Candidate Search App",
		description: "An app that uses web scraping and natural language processing to collect candidate profiles and determine the best fit for a job.",
		pic: pfe,
		link: "https://github.com/ahmedsahnoun/PFE",
	},
	{
		title: "EPOS Converter",
		description: "A Windows app that converts between multiple Electronic Point of Service protocols.",
		pic: epos,
		link: "https://github.com/ahmedsahnoun/EPOS_Converter",
	},
	{
		title: "Dealabs Discord Bot",
		description: "A Discord bot that allows the monitoring of deals on the website Dealabs.",
		pic: dealabs,
		link: "https://github.com/ahmedsahnoun/Dealabs-Discord-Bot",
	},
	{
		title: "TicTacToe",
		description: "A simple TicTacToe game to test the efficiency of different game algorithms.",
		pic: tictactoe,
		link: "https://github.com/ahmedsahnoun/Tic-Tac-Toe",
	},
	{
		title: "Plinko Twitch Overlay",
		description: "A Twitch overlay that triggers automatically with events and drops plinko balls on stream for potential rewards.",
		pic: plinko,
	},
	{
		title: "Twitch Extension",
		description: "A Twitch extension that allows viewers to execute commands on the streamer's PC for money.",
		pic: chatsrevenge,
		link: "https://dashboard.twitch.tv/extensions/6fwhzhvt0ljihf9o1vzvjfp12jvkax",
	},
];
