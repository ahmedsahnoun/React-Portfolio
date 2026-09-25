import { motion } from "framer-motion";

const DIRECTIONS = {
	up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
	down:  { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
	left:  { hidden: { opacity: 0, x: -70 }, visible: { opacity: 1, x: 0 } },
	right: { hidden: { opacity: 0, x: 70 },  visible: { opacity: 1, x: 0 } },
	fade:  { hidden: { opacity: 0 },         visible: { opacity: 1 } },
};

const Reveal = ({ children, direction = "up", delay = 0, duration = 0.6, className, once = true, ...rest }) => (
	<motion.div
		className={className}
		initial="hidden"
		whileInView="visible"
		viewport={{ once }}
		transition={{ duration, delay }}
		variants={DIRECTIONS[direction]}
		{...rest}
	>
		{children}
	</motion.div>
);

export default Reveal;
