/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/config/navItems";
import { SubscribeDialog } from "../subscribeDialog/SubscribeDialog";

export function MainNav() {
	const segment = useSelectedLayoutSegment();

	return (
		<div className="flex gap-6 md:gap-10 flex justify-between p-[2vh] md:p-[5vh] lg:p-[5vh] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
			<Link href="/" className="items-center space-x-2 flex">
				<img src="/logo.png" alt='logo' height={50} width={50} style={{borderRadius: 12}} />
				<span className="font-bold inline-flex">
					Job Journey
				</span>
			</Link>
			<nav className="hidden gap-6 md:flex">
				{navItems.mainNav.map((item: any, index: any) => (
					<Link
						key={index}
						href={item.disabled ? "#" : item.href}
						className={cn(
							"flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
							item.href.startsWith(`/${segment}`)
								? "text-foreground"
								: "text-foreground/60",
							item.disabled && "cursor-not-allowed opacity-80"
						)}
					>
						{item.title}
					</Link>
				))}
			</nav>
			<SubscribeDialog />
		</div>
	);
}
