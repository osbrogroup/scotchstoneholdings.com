"use client";

import React from "react";
import Image from "next/image";
import MainLayout from "../../components/MainLayout";

const leaders = [
	{
		name: "Jerry Ehizibue",
		title: "Founder & CEO",
		image: "/images/about/jerry.jpg",
		icon: "/globe.svg",
		bio: `Jerry Ehizibue is a purpose-driven entrepreneur and the visionary Founder & CEO of Scotch Stone Holdings Limited. His journey into real estate was born out of a deep commitment to honesty, transparency, and creating lasting value for clients and investors.\n\n“I've always seen myself as someone driven by purpose and grounded in honesty—and that same foundation is what Scotch Stone Holdings is built on. I don’t believe transparency should be an option in business; for us, it’s the only way we know how to operate. Every decision we make, every project we launch, and every investor we partner with is guided by this unwavering principle.”\n\nScotch Stone was built from the ground up with an unwavering respect for trust, integrity, and innovation. Under Jerry’s leadership, the company has grown into a respected force in Nigeria’s real estate sector, offering investors not just properties, but a secure pathway to wealth creation. His vision is clear: to build not just estates, but a thriving community of individuals who believe in doing business the right way—where people come first, always.`
	},
	{
		name: "Enijie Destiny",
		title: "Founder & CEO",
		image: "/images/about/enijie.jpeg",
		icon: "/window.svg",
		bio: `Enijie Destiny is a passionate real estate entrepreneur and the Founder & CEO of Scotch Stone Holdings Limited. His journey into real estate is rooted in a strong belief in empowerment—helping people make smart, secure investments that lead to financial growth and lasting impact.\n\n“For me, real estate isn’t just about selling land or properties—it’s about helping people transform their futures. I’ve always believed that when you empower others to succeed, success finds you too. That’s the spirit we’ve built Scotch Stone on—a commitment to guide every client with honesty, clarity, and a genuine desire to see them grow.”\n\nDriven by this purpose, Enijie plays a critical role in steering Scotch Stone’s operational excellence, investor relations, and long-term growth strategies. His leadership is defined by dedication to delivering premium value, maintaining transparency, and fostering trust. Under his guidance, Scotch Stone continues to thrive as a real estate company that is not only building properties but also building wealth, opportunities, and communities for generations.`
	},
	{
		name: "Ehijie Raphel",
		title: "Chief Operations Officer (COO)",
		image: "/images/about/raphel.jpeg",
		icon: "/file.svg",
		bio: `Ehijie Raphel is the Chief Operations Officer (COO) at Scotch Stone Holdings Limited, where he leads the company’s operational strategy, project execution, and internal coordination. With a wealth of experience in real estate development, logistics, and team management, he ensures that all projects meet the company’s high standards for quality, efficiency, and timely delivery.\n\nEhijie plays a vital role in aligning the day-to-day operations with the company’s long-term vision, ensuring seamless collaboration across departments—from site acquisition to development and client satisfaction. His hands-on approach and problem-solving mindset make him a driving force behind the success of Scotch Stone’s residential and commercial projects.\n\n"For me, it’s more than just building structures—it’s about creating communities and delivering excellence in every detail," says Raphel.`
	},
	{
		name: "Simeon B. Sunday",
		title: "General Manager & Head of Marketing",
		image: "/images/about/simeon.png",
		icon: "/vercel.svg",
		bio: `Simeon B. Sunday is the General Manager and Head of Marketing at Scotch Stone Holdings Limited, where he oversees strategic operations, sales, and marketing. With a strong background in property sales, project management, and brand positioning, he drives the company’s growth through innovative campaigns, effective team leadership, and strategic partnerships. His role is central to delivering high-quality real estate developments and expanding the company’s market presence across Nigeria.\n\n"At Scotch Stone, our goal is not just to sell land or homes—we’re building lasting value and helping people secure their future through real estate," says Simeon.`
	}
];

const AboutUsPage = () => {
	return (
		<MainLayout>
			<main className="min-h-screen pt-0 pb-20 px-2">
				{/* Dark background top section */}
				<div className="w-full bg-zinc-900 pt-28 pb-12 px-2 rounded-b-3xl shadow-lg">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-4 text-center drop-shadow-lg tracking-tight">
							About Us
						</h1>
						<p className="text-lg md:text-xl text-zinc-100 text-center max-w-2xl mx-auto mb-2 font-medium">
							Scotch Stone Holdings Limited is a full-service real estate company based in Lagos, Nigeria, established to meet the growing demand for professional real estate services in one of Africa’s fastest-growing markets. With a strong focus on property development, sales, leasing, and comprehensive property management, we bring deep local expertise and a modern approach to every project.<br /><br />
							We are driven by a passion to reshape living and working experiences across Africa through groundbreaking developments. From smart homes to AI-powered estates and commercial hubs, our projects are designed to elevate the standard of real estate while meeting the evolving needs of our clients.
						</p>
					</div>
				</div>
				{/* Rest of the page with modern card design */}
				<div className="max-w-6xl mx-auto px-2 mt-10">
					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-12 text-center tracking-tight drop-shadow-lg">
							Leadership & Board
						</h2>
						<div className="flex flex-col gap-14">
							{leaders.map((leader) => (
								<div
									key={leader.name}
									className="group relative flex flex-row bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden hover:scale-[1.02] hover:shadow-orange-200/40 transition-all duration-300"
									style={{ minHeight: 320 }}
								>
									{/* Faded background image left */}
									<div className="absolute left-0 top-0 bottom-0 w-2/5 min-w-[260px] max-w-[340px] z-0">
										<Image
											src={leader.image}
											alt={leader.name}
											fill
											className="object-cover w-full h-full opacity-20 blur-[2px] grayscale group-hover:opacity-30 transition-all duration-300"
											style={{ borderTopLeftRadius: '1.5rem', borderBottomLeftRadius: '1.5rem' }}
										/>
									</div>
									{/* Main portrait left */}
									<div className="relative w-2/5 min-w-[260px] max-w-[340px] flex items-center justify-center z-10">
										<Image
											src={leader.image}
											alt={leader.name}
											width={320}
											height={400}
											className="object-cover w-full h-full rounded-2xl border-4 border-orange-400 shadow-lg group-hover:scale-105 transition-all duration-300"
											style={{ aspectRatio: '3/4', minHeight: 260, maxHeight: 400 }}
										/>
									</div>
									{/* Info right */}
									<div className="flex-1 flex flex-col justify-center p-10 z-10 bg-gradient-to-br from-orange-50 via-white to-orange-100">
										<h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-2 flex items-center gap-2">
											{leader.name}
										</h3>
										<span className="text-orange-400 text-base font-semibold mb-3 block">{leader.title}</span>
										<p className="text-zinc-800 text-lg whitespace-pre-line leading-relaxed font-medium">
											{leader.bio}
										</p>
									</div>
								</div>
							))}
						</div>
					</section>
				</div>
				<style jsx global>{`
					.landscape-card {
						box-shadow: 0 8px 32px 0 rgba(255, 153, 0, 0.08),
							0 1.5px 8px 0 rgba(0, 0, 0, 0.08);
					}
					.landscape-card:hover {
						box-shadow: 0 12px 40px 0 rgba(255, 153, 0, 0.18),
							0 2px 12px 0 rgba(0, 0, 0, 0.12);
					}
				`}</style>
			</main>
		</MainLayout>
	);
};

export default AboutUsPage;
