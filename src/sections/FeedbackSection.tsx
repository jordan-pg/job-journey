import { FeedbackDialog } from "@/components/feedbackDialog/FeedbackDialog";
import React from "react";

const FeedbackSection = () => {
	return (
		<section
		id="feedback"
		className="space-y-6 bg-slate-50 py-8 md:py-12 lg:py-48"
	>
		<div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
			<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
				We Value Your Feedback!
			</h2>
			<p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-10">
				At Job Journey, your insights and experiences are vital
				to us. We&apos;re committed to continuously enhancing
				our services and offerings. Whether it&apos;s a
				compliment, suggestion, or a concern, we&apos;re eager
				to hear from you.
			</p>
			<FeedbackDialog />
		</div>
	</section>
	);
};

export default FeedbackSection;
