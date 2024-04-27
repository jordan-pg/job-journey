import { Card } from "@/components/ui/card";
import React from "react";

export default async function IndexPage() {
	return (
		<main>
			<Card className="p-10">
				<div className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1">
					Privacy Policy
				</div>

				<p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7 mb-10">
					At Job Journey, the privacy of our visitors is of extreme
					importance to us. This privacy policy document outlines the
					types of personal information that is received and collected
					by Job Journey and how it is used.
				</p>

				<h3 className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 font-bold">
					No Data Collection
				</h3>
				<p>
					Job Journey does not collect, store, or process any personal
					data through its website. Our website acts solely as a
					landing page that redirects users to an external AI-powered
					GPT service.
				</p>

				<h3 className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 font-bold">
					External Links
				</h3>
				<p>
					Our website may contain links to external sites that are not
					operated by us. Please be aware that we have no control over
					the content and practices of these sites, and cannot accept
					responsibility or liability for their respective privacy
					policies.
				</p>

				<h3 className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 font-bold">
					Consent
				</h3>
				<p>
					By using our website, you hereby consent to our privacy
					policy and agree to its terms.
				</p>

				<h3 className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 font-bold">
					Changes to This Privacy Policy
				</h3>
				<p>
					We may update our Privacy Policy from time to time. Thus, we
					advise you to review this page periodically for any changes.
				</p>

				<h3 className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 font-bold">
					Contact Information
				</h3>
				<p>
					If you have any questions about our Privacy Policy, please
					contact us.
				</p>
			</Card>
		</main>
	);
}
