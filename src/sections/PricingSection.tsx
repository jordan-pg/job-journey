import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const PricingSection = () => {
	return (
		<section
			id="pricing"
			className="space-y-6 py-8 md:py-12 lg:py-24 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500"
		>
			<div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
				<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
					Pricing
				</h2>
				<p className="max-w-[85%] sm:text-lg sm:leading-7 pb-10">
					Coming soon. Take advantage of using our GPT for <b>FREE</b>{" "}
					until further notice!
				</p>
				<div className="justify-center m-[auto]">
					<Skeleton className="h-[500px] w-60" />
				</div>
			</div>
		</section>
	);
};

export default PricingSection;
