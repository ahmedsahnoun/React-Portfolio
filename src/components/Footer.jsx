const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="site-footer">
			<span>&copy; {year} Ahmed Sahnoun</span>
			<span>Antibes, France</span>
		</footer>
	);
};

export default Footer;
