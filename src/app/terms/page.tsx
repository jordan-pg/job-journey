import { Card } from "@/components/ui/card";
import React from "react";

export default async function IndexPage() {
	return (
		<main>
			<Card className="p-10">
				<div className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1">Terms and Conditions</div>
				<p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7 mb-10">
					Welcome to Job Journey! This document outlines the terms and
					conditions for using the Job Journey website.
				</p>

				<h2 className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 font-bold">Acceptance of Terms</h2>
				<p>
					By accessing this website, you agree to be bound by these
					terms and conditions. If you disagree with any part of these
					terms, please do not use our website.
				</p>

				<h3 className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 font-bold">Use of the Website</h3>
				<p>
					The Job Journey website serves as a landing page that
					redirects users to an AI-powered GPT service. We do not
					store or process any personal data on our site.
				</p>

				<h3 className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 font-bold">Intellectual Property Rights</h3>
				<p>
					Unless otherwise stated, Job Journey and/or its licensors
					own the intellectual property rights for all material on Job
					Journey. All intellectual property rights are reserved.
				</p>

				<h3 className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 font-bold">Limitation of Liability</h3>
				<p>
					Job Journey is not responsible for any losses or damages
					arising from the use of our website or redirection to
					external GPT services.
				</p>

				<h3 className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 font-bold">Amendments to Terms</h3>
				<p>
					We reserve the right to amend these terms and conditions at
					any time. It is your responsibility to regularly check this
					page for changes.
				</p>

				<h3 className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 font-bold">Contact Information</h3>
				<p>
					If you have any questions about these Terms, please contact
					us though the leave feedback form on the home page.
				</p>
			</Card>
		</main>
	);
}
