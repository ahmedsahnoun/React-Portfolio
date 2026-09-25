export const Blob = ({ variant = "purple", style }) => (
	<div className={`blob blob--${variant}`} style={style} />
);

// Fixed to the viewport (not a container) so it always covers the full
// screen width regardless of any section's max-width.
const BlobBackground = () => (
	<div className="ambient-bg" aria-hidden="true">
		<Blob variant="purple" style={{ top: "-10%", left: "-12%" }} />
		<Blob variant="cyan" style={{ top: "15%", right: "-15%", animationDelay: "-6s" }} />
		<Blob variant="pink" style={{ bottom: "-18%", left: "22%", animationDelay: "-12s" }} />
	</div>
);

export default BlobBackground;
