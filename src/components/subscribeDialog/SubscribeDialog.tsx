"use client"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export function SubscribeDialog() {
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
				<Button>Subscribe for updates</Button>
			</DialogTrigger>
			<DialogContent className="fill">
				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSeBlk1Sk4AfCBdGzWTxMKCiiUPTNKWKS4GoOeMiWusIczi5ZQ/viewform?embedded=true"
					width={windowWidth}
					height="629"
				>
					Loading…
				</iframe>
			</DialogContent>
		</Dialog>
	);
}
