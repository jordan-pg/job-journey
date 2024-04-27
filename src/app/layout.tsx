import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from "/public/icons/favicon.ico";
import AndroidFavicon512 from "/public/icons/android-chrome-512x512.png";
import AndroidFavicon192 from "/public/icons/android-chrome-192x192.png";
import AppleTouchIcon from "/public/icons/apple-touch-icon.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Job Journey - Build Your AI-Powered Resume",
	description:
		"Unlock Your Potential with Personalized AI-Powered Resumes. Empower your job journey with our ChatGPT-driven resume and interview expertise, crafted to boost your job search success.",
	icons: [
		{ rel: "icon", url: Favicon.src },
		{ rel: "icon", url: AndroidFavicon192.src },
		{ rel: "icon", url: AndroidFavicon512.src },
		{ rel: "icon", url: AppleTouchIcon.src },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
