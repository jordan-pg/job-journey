"use client"
import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function FeedbackDialog() {
	const [windowWidth, setWindowWidth] = useState<number>(350);

	useEffect(() => {
		if(window.innerWidth.valueOf() > 700) {
			setWindowWidth(440)
		} else {
			setWindowWidth(window.innerWidth.valueOf() - 50);	
		}
	}, []);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className={cn(
						buttonVariants({
							size: "lg",
							variant: "gradient",
						})
					)}
				>
					Leave your feedback
				</Button>
			</DialogTrigger>
			<DialogContent className="fill">
				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSfKXoHi_RoWapIV6Bdn-y4ShsMdK0_Kif3YeFpo004lOisFNQ/viewform?embedded=true"
					width={windowWidth}
					height="629"
				>
					Loading…
				</iframe>
			</DialogContent>
		</Dialog>
	);
}
