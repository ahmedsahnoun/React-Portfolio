export const caseStudies = [
	{
		id: "fleet-platform",
		tag: "Cloud / IoT — Accenture",
		title: "Unified Fleet Management Platform",
		description: "Unified performance tracking of a cleaning-robot fleet across 5 vendor clouds into a single interface, eliminating the need to log into separate vendor platforms and normalizing inconsistent data formats into one consistent model. Extended fleet visibility with custom IoT telemetry using ESP32 microcontrollers and Bluetooth-based data collection.",
		stack: ["TypeScript", "Angular", "Python", "REST APIs", "Azure DevOps", "Terraform"],
		stats: [
			{ value: "5", label: "vendor clouds unified" },
			{ value: "1", label: "single dashboard" },
		],
		icon: "cloud",
	},
	{
		id: "computer-vision-ops",
		tag: "Applied AI — Accenture",
		title: "Computer Vision for Parcel Delivery Operations",
		description: "Ran on-site discovery and operational video collection to define requirements, then engineered detection of packages and personnel to support operational governance and process oversight for a parcel-delivery client.",
		stack: ["Computer Vision", "Python", "On-Site Discovery"],
		stats: [],
		icon: "vision",
	},
	{
		id: "biometric-identity",
		tag: "Security & Identity — Accenture",
		title: "Biometric Identity Verification",
		description: "Owned delivery of a biometric identity-verification solution end-to-end, driving integration, architecture, and security decisions directly with the client.",
		stack: ["Solution Architecture", "Security", "Client Delivery"],
		stats: [],
		icon: "security",
	},
];
