"use client";
import MainLayout from "../../components/MainLayout";
import React from "react";

const reasons = [
	{
		title: "High Growth Market",
		description:
			"Lagos is one of Africa’s fastest-growing cities, with rapid urbanization and increasing demand for quality housing and commercial spaces.",
		icon: (
			<svg
				className="w-10 h-10 text-orange-500 mb-3"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 2v20m10-10H2"
				/>
			</svg>
		),
	},
	{
		title: "Secure Land Titles",
		description:
			"We offer properties with verified titles, including Government Allocation and C of O, ensuring your investment is safe and secure.",
		icon: (
			<svg
				className="w-10 h-10 text-orange-500 mb-3"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M5 13l4 4L19 7"
				/>
			</svg>
		),
	},
	{
		title: "Flexible Payment Plans",
		description:
			"Our payment plans are designed to suit your budget, making it easy to own land or property without financial stress.",
		icon: (
			<svg
				className="w-10 h-10 text-orange-500 mb-3"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 8v4l3 3"
				/>
				<circle cx="12" cy="12" r="10" />
			</svg>
		),
	},
	{
		title: "Prime Locations",
		description:
			"Our estates are strategically located near major infrastructure, commercial hubs, and future developments.",
		icon: (
			<svg
				className="w-10 h-10 text-orange-500 mb-3"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
				/>
				<circle cx="12" cy="9" r="2.5" />
			</svg>
		),
	},
	{
		title: "Expert Guidance",
		description:
			"Our team provides honest advice and transparent processes, guiding you every step of the way.",
		icon: (
			<svg
				className="w-10 h-10 text-orange-500 mb-3"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8 17l4 4 4-4m0-5a4 4 0 1 0-8 0v5a4 4 0 0 0 8 0v-5z"
				/>
			</svg>
		),
	},
];

// Custom layout: 1 left, 3 center (with middle card larger), 1 right
export default function WhyInvestPage() {
	return (
		<MainLayout>
			<div className="pt-24 pb-10 min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#f5f7fa] font-sans">
				<div className="container mx-auto px-4">
					<h1 className="text-5xl font-extrabold text-center text-primary mb-2 drop-shadow-lg font-serif tracking-tight">
						Why Invest With Us?
					</h1>
					<p className="text-center text-lg text-gray-200 mb-8 font-light">
						Discover the Scotch Stone advantage and why our clients choose us for
						secure, high-growth real estate investments.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
						{/* Left card */}
						<div className="md:col-span-1 flex">
							<div className="bg-white rounded-3xl shadow-2xl border border-orange-200 p-8 flex flex-col items-center gap-4 w-full justify-center hover:scale-[1.03] hover:shadow-orange-300/40 transition-all duration-300 min-h-[320px]">
								{reasons[4].icon}
								<h3 className="text-2xl font-bold text-orange-500 mb-2 text-center">
									{reasons[4].title}
								</h3>
								<p className="text-zinc-700 text-base text-center">
									{reasons[4].description}
								</p>
								<div className="mt-4 w-full flex justify-center">
									<a
										href="/contact"
										className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow hover:bg-orange-700 transition"
									>
										Talk to an Expert
									</a>
								</div>
							</div>
						</div>
						{/* Center cards */}
						<div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-white rounded-3xl shadow-2xl border border-orange-200 p-8 flex flex-col items-center gap-4 hover:scale-[1.03] hover:shadow-orange-300/40 transition-all duration-300 min-h-[260px]">
								{reasons[0].icon}
								<h3 className="text-xl font-bold text-orange-500 mb-2 text-center">
									{reasons[0].title}
								</h3>
								<p className="text-zinc-700 text-base text-center">
									{reasons[0].description}
								</p>
							</div>
							<div className="bg-white rounded-3xl shadow-2xl border border-orange-200 p-10 flex flex-col items-center gap-4 hover:scale-[1.05] hover:shadow-orange-300/40 transition-all duration-300 min-h-[320px] md:min-h-[340px]">
								{reasons[2].icon}
								<h3 className="text-2xl font-bold text-orange-500 mb-2 text-center">
									{reasons[2].title}
								</h3>
								<p className="text-zinc-700 text-base text-center">
									{reasons[2].description}
								</p>
							</div>
							<div className="bg-white rounded-3xl shadow-2xl border border-orange-200 p-8 flex flex-col items-center gap-4 hover:scale-[1.03] hover:shadow-orange-300/40 transition-all duration-300 min-h-[260px]">
								{reasons[1].icon}
								<h3 className="text-xl font-bold text-orange-500 mb-2 text-center">
									{reasons[1].title}
								</h3>
								<p className="text-zinc-700 text-base text-center">
									{reasons[1].description}
								</p>
							</div>
						</div>
						{/* Right card */}
						<div className="md:col-span-1 flex">
							<div className="bg-white rounded-3xl shadow-2xl border border-orange-200 p-8 flex flex-col items-center gap-4 w-full justify-center hover:scale-[1.03] hover:shadow-orange-300/40 transition-all duration-300 min-h-[320px]">
								{reasons[3].icon}
								<h3 className="text-2xl font-bold text-orange-500 mb-2 text-center">
									{reasons[3].title}
								</h3>
								<p className="text-zinc-700 text-base text-center">
									{reasons[3].description}
								</p>
								<div className="mt-4 w-full flex justify-center">
									<a
										href="/contact"
										className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow hover:bg-orange-700 transition"
									>
										Talk to an Expert
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
