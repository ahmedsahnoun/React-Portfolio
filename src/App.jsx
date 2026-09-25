import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Expertise from "./components/Expertise.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BlobBackground from "./common/BlobBackground.jsx";
import ScrollProgress from "./common/ScrollProgress.jsx";

const App = () => {
	return (
		<>
			<BlobBackground />
			<ScrollProgress />
			<Nav />
			<Hero />
			<About />
			<Expertise />
			<CaseStudies />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
