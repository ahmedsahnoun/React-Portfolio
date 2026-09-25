// Tracks the cursor position over a card and exposes it as CSS custom
// properties, driving a radial-gradient "spotlight" glow in CSS (see .card::before).
export const onCardMouseMove = (e) => {
	const rect = e.currentTarget.getBoundingClientRect();
	e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
	e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
};
