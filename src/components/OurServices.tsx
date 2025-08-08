import React from "react";
import Image from "next/image";

const services = [
	{
		image: "/images/services/investment-advisory.jpg",
		title: "Real Estate Investment",
		description:
			"Flexible, high-yield property investment options in Lagos and beyond. Safe, transparent, and tailored for long-term value.",
	},
	{
		image: "/images/services/renovation-upgrades.jpg",
		title: "Real Estate Development",
		description:
			"We turn land into modern, well-planned estates—quality, value, and sustainability from start to finish.",
	},
	{
		image: "/images/services/property-sales.jpg",
		title: "Sales of Land & Luxury Homes",
		description:
			"Buy land or luxury homes with ease. Wide listings, expert sales team, and a safe, efficient process.",
	},
	{
		image: "/images/services/rentals.jpg",
		title: "Short-Let Apartment",
		description:
			"Serviced shortlets for business or leisure—furnished, secure, and comfortable for any stay.",
	},
	{
		image: "/images/services/consultancy.jpg",
		title: "Property Consultant & Management",
		description:
			"Expert advice and hands-on management for your property—maximize value, minimize hassle.",
	},
	{
		image: "/images/services/facility-management.jpg",
		title: "Property Valuation",
		description:
			"Professional valuations for sales, investment, or insurance. Fast, accurate, and reliable.",
	},
];

const OurServices = () => (
	<section className="pt-16 pb-10 bg-white">
		<div className="max-w-6xl mx-auto px-4">
			<h2
				className="text-3xl md:text-4xl font-extrabold text-center mb-6"
				style={{
					color: "#ff6a00",
					textShadow: "0 2px 8px rgba(255,106,0,0.18)",
				}}
			>
				Our Services
			</h2>
			<hr className="border-t border-orange-200 my-4" />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{services.map((service, idx) => (
					<div
						key={idx}
						className="relative border-4 border-primary/30 rounded-2xl shadow-xl p-0 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200 overflow-hidden min-h-[420px] max-h-[520px]"
					>
						<div
							className="relative w-full h-72"
							style={{
								height:
									service.title === "Sales of Land & Luxury Homes"
										? "18rem"
										: undefined,
								top: 0,
							}}
						>
							<Image
								src={service.image}
								alt={service.title}
								fill
								style={{
									objectFit:
										service.title === "Sales of Land & Luxury Homes"
											? "contain"
											: "cover",
									objectPosition:
										service.title === "Sales of Land & Luxury Homes"
											? "center top"
											: service.title === "Real Estate Investment"
											? "center 10%"
											: service.title === "Property Consultant & Management"
											? "center 10%"
											: "center",
								}}
								className="rounded-t-2xl bg-white"
							/>
						</div>
						<div
							className="relative z-10 flex flex-col items-center justify-center h-full w-full p-6 gap-2"
							style={
								service.title === "Sales of Land & Luxury Homes"
									? { minHeight: "160px", maxHeight: "180px", paddingTop: "2rem", paddingBottom: "2rem" }
									: service.title === "Investment Advisory"
									? { marginTop: "-3rem" }
									: service.title === "Property Sales"
									? { marginTop: "-3.75rem" }
									: service.title === "Apartment Rentals"
									? { marginTop: "-2rem" }
									: service.title === "Facility Management"
									? { marginTop: "-2rem" }
									: service.title === "Consultancy"
									? { marginTop: "-3.5rem" }
									: service.title === "Constructions, Renovation & Upgrade"
									? { marginTop: "-2rem" }
									: {}
							}
						>
							<h3
								className="text-xl font-extrabold mb-1 text-black"
								style={{
									color: "#ff6a00",
									textShadow: "0 1px 4px rgba(255,106,0,0.10)",
								}}
							>
								{service.title}
							</h3>
							<hr className="border-t border-orange-200 w-1/2 mx-auto my-1" />
							<p
								className="font-bold text-base leading-relaxed drop-shadow-xl text-black"
								style={{
									textShadow: "0 1px 4px rgba(0,0,0,0.18)",
								}}
							>
								{service.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default OurServices;
