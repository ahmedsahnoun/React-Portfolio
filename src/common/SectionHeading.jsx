const SectionHeading = ({ eyebrow, title, gradientTitle }) => (
	<div className="section-heading">
		{eyebrow && <span className="eyebrow">{eyebrow}</span>}
		<h2>{title} <span className="grad">{gradientTitle}</span></h2>
	</div>
);

export default SectionHeading;
