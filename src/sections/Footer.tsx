import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-slate-50 text-center py-4 text-muted-foreground">
			<p>
				&copy; 2024 Job Journey. All Rights Reserved.{" "}
				<Link
					href="/terms"
                    target="_blank"
					rel="noopener noreferrer"
					className={cn(buttonVariants({ variant: "link" }))}
				>
					Terms
				</Link>
				<Link
					href="/privacy-policy"
                    target="_blank"
					rel="noopener noreferrer"
					className={cn(buttonVariants({ variant: "link" }))}
				>
					Privacy Policy
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
