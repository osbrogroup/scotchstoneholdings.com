"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/service-apartment", label: "Short-let" },
	{ href: "/about-us", label: "About Us" },
	{ href: "/why-invest", label: "Why Invest" },
	{ href: "/opportunities", label: "Opportunities" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
];

const Header = () => {
	const pathname = usePathname();
	return (
		<header className="bg-dark/95 text-white fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-sm">
			<nav className="container mx-auto flex items-center justify-between py-4">
				{/* Company Name Left */}
				<div
					className="flex-1 flex justify-center items-center pr-10"
					style={{ fontFamily: "Segoe UI, Changa, Arial, sans-serif" }}
				>
					<Link
						href="/"
						className="flex flex-col items-center group"
						prefetch={false}
					>
						<span
							style={{
								color: "#ff9900",
								fontSize: "1.5rem",
								fontWeight: 900,
								letterSpacing: "1.2px",
								textTransform: "uppercase",
								fontFamily: "Segoe UI, Changa, Arial, sans-serif",
							}}
							className="transition-colors group-hover:text-primary leading-none"
						>
							SCOTCHSTONE
						</span>
						<span
							className="text-white text-xs md:text-sm mt-0.5 ml-0"
							style={{
								fontSize: "0.8em",
								lineHeight: "1.1",
								position: "static",
							}}
						>
							HOLDINGS LTD
						</span>
					</Link>
				</div>
				{/* Menu Center - smaller font, single line */}
				<ul
					className="flex-1 flex items-center gap-1 text-sm md:text-base font-medium whitespace-nowrap"
					style={{ fontFamily: "Segoe UI, Changa, Arial, sans-serif" }}
				>
					{/* Home link */}
					<li>
						<Link
							href="/"
							className={`transition-colors px-2 py-1 rounded-md ${
								pathname === "/"
									? "text-primary bg-white/10 font-bold"
									: "hover:text-primary hover:bg-primary/10"
							}`}
							prefetch={false}
						>
							Home
						</Link>
					</li>
					{/* Our Properties Dropdown - placed right after Home */}
					<li className="relative group">
						<button
							className="px-4 py-2 text-white font-semibold hover:text-[#ff6a00] transition-colors"
							type="button"
						>
							Our Properties
						</button>
						<div className="absolute left-0 top-full min-w-[220px] bg-black/60 backdrop-blur-lg rounded-xl shadow-lg hidden group-hover:block transition-opacity z-50">
							<div className="flex flex-col divide-y divide-white/20 gap-1.5 py-2">
								<Link
									href="/properties/setiasky"
									className="px-5 py-2 text-white hover:text-[#ff6a00] transition-colors"
								>
									Setia Sky Residences
								</Link>
								<Link
									href="/properties/vinaphase1"
									className="px-5 py-2 text-white hover:text-[#ff6a00] transition-colors"
								>
									Vina Residence Phase 1
								</Link>
								<Link
									href="/properties/vinaphase2"
									className="px-5 py-2 text-white hover:text-[#ff6a00] transition-colors"
								>
									Vina Residence Phase 2
								</Link>
							</div>
						</div>
					</li>
					{/* The rest of your navLinks */}
					{navLinks
						.filter(({ href }) => href !== "/")
						.map(({ href, label }) => (
							<li key={href}>
								<Link
									href={href}
									className={`transition-colors px-2 py-1 rounded-md ${
										pathname === href
											? "text-primary bg-white/10 font-bold"
											: "hover:text-primary hover:bg-primary/10"
									}`}
									prefetch={false}
								>
									{label}
								</Link>
							</li>
						))}
				</ul>
				{/* Phone Right */}
				<div
					className="flex-1 flex justify-end"
					style={{ fontFamily: "Segoe UI, Changa, Arial, sans-serif" }}
				>
					<a
						href="tel:+2348122132548"
						className="text-sm md:text-base font-bold text-primary hover:text-white transition flex items-center"
					>
						<span
							style={{
								fontSize: "1.1em",
								marginRight: "0.4em",
								display: "flex",
								alignItems: "center",
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								width="20"
								height="20"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 5.75C3 4.784 3.784 4 4.75 4h2.5A1.75 1.75 0 019 5.75v2.5A1.75 1.75 0 017.25 10H6.5a11.5 11.5 0 005.5 5.5v-.75A1.75 1.75 0 0113.25 13h2.5A1.75 1.75 0 0117 14.75v2.5A1.75 1.75 0 0115.25 19h-2.5C4.784 19 3 17.216 3 15.25v-9.5z"
								/>
							</svg>
						</span>
						+234-812-213-2548
					</a>
				</div>
			</nav>
			<div className="w-full h-px bg-white" />
		</header>
	);
};

export default Header;


