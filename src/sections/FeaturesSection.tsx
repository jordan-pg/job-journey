import React from "react";
import {
	FaBriefcase,
	FaGlobe,
	FaLock,
	FaFilePdf,
	FaLightbulb,
	FaWandMagicSparkles,
} from "react-icons/fa6";

const FeaturesSection = () => {
	return (
		<section
			id="features"
			className="space-y-6 bg-slate-50 py-8 md:py-12 lg:py-24"
		>
			<div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
				<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
					Features
				</h2>
				<p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
					Job Journey empowers your career search with advanced tools
					and personalized guidance through our trained ChatGPT tool.
				</p>
			</div>
			<div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
				<div className="relative overflow-hidden rounded-lg border bg-background p-2 text-center">
					<div className="flex h-[180px] flex-col justify-between rounded-md p-6">
						<FaFilePdf className="h-12 w-12 fill-current m-[auto] text-blue-500" />
						<div className="space-y-2 mt-5">
							<h3 className="font-bold">
								Customized Resume Builder
							</h3>
							<p className="text-sm text-muted-foreground">
								Tailor your resume to stand out using our
								trained GPT.
							</p>
						</div>
					</div>
				</div>

				<div className="relative overflow-hidden rounded-lg border bg-background p-2 text-center">
					<div className="flex h-[180px] flex-col justify-between rounded-md p-6">
						<FaWandMagicSparkles className="h-12 w-12 fill-current m-[auto] text-blue-500" />
						<div className="space-y-2 mt-5">
							<h3 className="font-bold">AI-Generated Data </h3>
							<p className="text-sm text-muted-foreground">
								The first tool tailoring your resume
								to specific job links and descriptions.
							</p>
						</div>
					</div>
				</div>

				<div className="relative overflow-hidden rounded-lg border bg-background p-2 text-center">
					<div className="flex h-[180px] flex-col justify-between rounded-md p-6">
						<FaBriefcase className="h-12 w-12 fill-current m-[auto] text-blue-500" />
						<div className="space-y-2 mt-5">
							<h3 className="font-bold">
								Professional Interview Coaching
							</h3>
							<p className="text-sm text-muted-foreground">
								Prepare for interviews with industry-specific
								mock sessions.
							</p>
						</div>
					</div>
				</div>

				<div className="relative overflow-hidden rounded-lg border bg-background p-2 text-center">
					<div className="flex h-[180px] flex-col justify-between rounded-md p-6">
						<FaGlobe className="h-12 w-12 fill-current m-[auto] text-blue-500" />
						<div className="space-y-2 mt-5">
							<h3 className="font-bold">
								Global Job Market Insights
							</h3>
							<p className="text-sm text-muted-foreground">
								Get insights into global employment trends and
								opportunities.
							</p>
						</div>
					</div>
				</div>

				<div className="relative overflow-hidden rounded-lg border bg-background p-2 text-center">
					<div className="flex h-[180px] flex-col justify-between rounded-md p-6">
						<FaLock className="h-12 w-12 fill-current  m-[auto] text-blue-500" />
						<div className="space-y-2 mt-5">
							<h3 className="font-bold">Secure Data Handling</h3>
							<p className="text-sm text-muted-foreground">
								Your personal data is safe and secure with us via OpenAI policy.
							</p>
						</div>
					</div>
				</div>

				<div className="relative overflow-hidden rounded-lg border bg-background p-2 text-center">
					<div className="flex h-[180px] flex-col justify-between rounded-md p-6">
						<FaLightbulb className="h-12 w-12 fill-current m-[auto] text-blue-500" />
						<div className="space-y-2 mt-5">
							<h3 className="font-bold">
								Innovative Job Matching
							</h3>
							<p className="text-sm text-muted-foreground">
								Discover job opportunities that match your
								skills and interests.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
