import { MainNav } from "@/components/nav/main-nav";
import HomeSection from "@/sections/HomeSection";
import FeaturesSection from "@/sections/FeaturesSection";
import PricingSection from "@/sections/PricingSection";
import FeedbackSection from "@/sections/FeedbackSection";
import Footer from "@/sections/Footer";

export default function IndexPage() {
	return (
		<main>
			<div className=" bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
				<MainNav />
				<HomeSection />
			</div>
			<FeaturesSection />
			<PricingSection />
			<FeedbackSection />
			<Footer />
		</main>
	);
}
