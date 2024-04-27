/* eslint-disable @next/next/no-img-element */
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const HomeSection = () => {
	const url = "https://chat.openai.com/g/g-baSWkrh7h-job-journey";

	return (
		<section className="space-y-6 pb-8 md:pb-12 pt-10 lg:py-8 h-screen max-h-screen overflow-hidden">
			<div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
				<h1 className="font-heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
					Unlock Your Potential with Personalized AI-Powered Resumes
				</h1>
				<p className="max-w-[42rem] leading-normal text-lg sm:text-xl sm:leading-8 mb-10">
					Empower your job journey with the first AI-powered tool tailoring your resume to specific jobs.
				</p>
				<Link
					target="_blank"
					rel="noopener noreferrer"
					href={url}
					className={cn(
						buttonVariants({
							size: "lg",
							variant: "gradient",
						})
					)}
				>
					Get started
				</Link>
			</div>
			<img
				src="/resume.png"
				alt="resume"
				height={60}
				width={1200}
				style={{
					maxWidth: "80vw",
					borderRadius: 24,
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: 60,
					opacity: 0.9,
					boxShadow: "-5px 3px 1px #4a4949"
				}}
				loading="lazy"
			/>
		</section>
	);
};

export default HomeSection;
