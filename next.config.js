/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "firebasestorage.googleapis.com" },
            { protocol: "https", hostname: "job-journey-da29e.web.app" }
		],
	},
};

module.exports = nextConfig;
