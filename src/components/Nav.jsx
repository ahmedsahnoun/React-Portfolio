import { useEffect, useRef, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NAV_LINKS = [
	{ id: "home", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "expertise", label: "Expertise" },
	{ id: "case-studies", label: "Case Studies" },
	{ id: "portfolio", label: "Projects" },
	{ id: "contact", label: "Contact" },
];

const Nav = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [current, setCurrent] = useState("home");
	const sectionsRef = useRef([]);

	useEffect(() => {
		sectionsRef.current = Array.from(document.querySelectorAll("section[id]"));

		const handleScroll = () => {
			setScrolled(window.scrollY > 80);

			const scrollY = window.pageYOffset;
			sectionsRef.current.forEach((section) => {
				const top = section.offsetTop - 300;
				const height = section.offsetHeight;
				if (scrollY > top && scrollY <= top + height) {
					setCurrent(section.getAttribute("id"));
				}
			});
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={scrolled ? "nav scrolled" : "nav"}>
			<a href="#home" className="logo" onClick={() => setMenuOpen(false)}>Ahmed Sahnoun</a>

			<ul className={menuOpen ? "nav-links open" : "nav-links"}>
				{NAV_LINKS.map((link) => (
					<li key={link.id}>
						<a
							href={`#${link.id}`}
							className={current === link.id ? "active" : ""}
							onClick={() => setMenuOpen(false)}
						>
							{link.label}
						</a>
					</li>
				))}
			</ul>

			<button
				className="menu-toggle"
				aria-label={menuOpen ? "Close menu" : "Open menu"}
				onClick={() => setMenuOpen((open) => !open)}
			>
				{menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
			</button>
		</nav>
	);
};

export default Nav;
