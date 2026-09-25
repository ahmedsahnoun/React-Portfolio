import { useEffect, useState } from "react";

const ScrollProgress = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />;
};

export default ScrollProgress;
