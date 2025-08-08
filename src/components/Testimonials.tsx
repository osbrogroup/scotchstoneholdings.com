"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
	{
		name: "Dr. Nneoma Okafor",
		text: "Buying land through Scotch Stone Holdings was a breeze. The team guided me through every step and ensured all documentation was genuine.",
		location: "Lekki, Lagos",
		image: "/images/clients/nneoma-okafor.jpg",
	},
	{
		name: "Mr. Tunde Adebayo",
		text: "I was impressed by the transparency and professionalism when purchasing my land. Highly trustworthy company!",
		location: "Enugu, Nigeria",
		image: "/images/clients/tunde-adebayo.jpg",
	},
	{
		name: "Mrs. Fatima Abubakar",
		text: "Their apartment rental process was transparent and quick. I love my new serviced apartment!",
		location: "Abuja, Nigeria",
		image: "/images/clients/fatima-abubakar.jpg",
	},
	{
		name: "Dr. Chukwudi Eze",
		text: "Finding a serviced apartment with Scotch Stone Holdings was easy and stress-free. Excellent service!",
		location: "Victoria Island, Lagos",
		image: "/images/clients/chukwudi-eze.jpg",
	},
	{
		name: "Mr. Ibrahim Aliyu",
		text: "Professional, reliable, and always available to answer my questions. All documents were authentic and delivered on time!",
		location: "Port Harcourt, Nigeria",
		image: "/images/clients/ibrahim-aliyu.jpg",
	},
	{
		name: "Mrs. Omolara Bakare",
		text: "Scotch Stone Holdings provided genuine property options and handled all documentation perfectly. Highly recommended!",
		location: "Lagos, Nigeria",
		image: "/images/clients/omolara-bakare.jpg",
	},
];

const ROTATE_INTERVAL = 5000; // 5 seconds

const Testimonials = () => {
	const [startIdx, setStartIdx] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setStartIdx((prev) => (prev + 2) % testimonials.length);
		}, ROTATE_INTERVAL);
		return () => clearInterval(interval);
	}, []);

	const visibleTestimonials = [
		testimonials[startIdx],
		testimonials[(startIdx + 1) % testimonials.length],
	];

	return (
		<section className="py-10 bg-white">
			<div className="max-w-4xl mx-auto px-4 text-center flex flex-col gap-6">
				<h2
					className="text-2xl md:text-3xl font-extrabold mb-4"
					style={{
						color: "#ff6a00",
						textShadow: "0 2px 8px rgba(255,106,0,0.18)",
					}}
				>
					What Our Clients Say
				</h2>
				<hr className="border-t border-orange-200 my-2 w-1/2 mx-auto" />
				<div className="flex flex-col md:flex-row gap-6 justify-center items-stretch transition-all duration-500">
					{visibleTestimonials.map((t, i) => (
						<div
							key={i}
							className="bg-white rounded-xl shadow-xl p-4 flex-1 min-w-[220px] flex flex-col justify-between border-2 border-primary/20 gap-2"
						>
							<div className="flex justify-center mb-2">
								<Image
									src={t.image}
									alt={t.name}
									width={96}
									height={96}
									className="rounded-full object-cover border-2 border-orange-400 shadow"
								/>
							</div>
							<p
								className="text-base font-bold mb-2"
								style={{
									color: "#222",
									textShadow: "0 1px 4px rgba(255,106,0,0.10)",
								}}
							>
								<span style={{ color: "#ff6a00" }}>
									{t.text.charAt(0)}
								</span>
								{t.text.slice(1)}
							</p>
							<hr className="border-t border-orange-200 my-1" />
							<div className="text-left mt-auto">
								<span
									className="font-bold"
									style={{ color: "#ff6a00" }}
								>
									{t.name}
								</span>
								<span
									className="block text-xs font-semibold"
									style={{ color: "#111" }}
								>
									{t.location}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
