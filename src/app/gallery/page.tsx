"use client";
import React, { useState } from "react";
import Image from "next/image";
import MainLayout from "@/components/MainLayout";

// Play button SVG for video thumbnails
const VideoIcon = () => (
	<span className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			className="drop-shadow-lg"
		>
			<circle cx="24" cy="24" r="22" fill="rgba(0,0,0,0.55)" stroke="#fff" strokeWidth="2"/>
			<polygon points="20,16 34,24 20,32" fill="#ff6a00" />
		</svg>
	</span>
);

const CARD_HEIGHT = 160; // px, adjust as needed for all cards
const CARD_CONTENT_HEIGHT = 58; // px, estimated content height
const CARD_CONTENT_OVERLAP = 24; // px, how much to overlap the image
const CARDS_PER_ROW = 3; // matches md:grid-cols-3

const galleryItems = [
	{
		type: "video",
		src: "https://youtu.be/eRKwvBLyP6I",
		poster: "/images/scotch2.jpg",
		title: "Property Walkthrough",
		description: "Take a virtual tour of our featured property Setia Sky.",
	},
	{
		type: "video",
		src: "https://youtu.be/g2aQbIKZ3xg",
		poster: "/images/scotch3.jpg",
		title: "Neighborhood Overview",
		description: "VIRTUAL TOUR: VINA RESIDENCE PHASE 1 – KETU-EPE, LAGOS",
	},
	{
		type: "video",
		src: "https://youtube.com/shorts/tuMOfPN4tyI?feature=share",
		poster: "/images/scotch4.jpg",
		title: "Client Testimonial",
		description: "VIRTUAL TOUR: VINA RESIDENCE PHASE 2 –OKEGUN, IBEJU LEKKI, LAGOS",	
	},
	{
		type: "image",
		srcs: [
			"/images/gallery01/1.jpg",
			"/images/gallery01/2.jpeg",
			"/images/gallery01/3.jpeg",
		],
		alt: "Luxury Living Room",
		title: "Luxury Living Room",
		description:
			"A modern, spacious living room with panoramic city views and elegant decor.",
	},
	{
		type: "image",
		srcs: [
			"/images/gallery02/1.jpg",
			"/images/gallery02/2.jpeg",
		],
		alt: "Elegant Kitchen",
		title: "Elegant Kitchen",
		description:
			"A chef-inspired kitchen with marble countertops and state-of-the-art appliances.",
	},
	{
		type: "image",
		srcs: [
			"/images/gallery03/1.jpg",
			"/images/gallery03/2.jpg",
			"/images/gallery03/3.jpg",
		],
		alt: "Serene Bedroom",
		title: "Serene Bedroom",
		description:
			"A tranquil bedroom retreat with soft lighting and plush bedding.",
	},
];

function getYouTubeEmbedUrl(url: string) {
  // Handles both youtu.be and youtube.com URLs
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

export default function GalleryPage() {
	const [selected, setSelected] = useState<number | null>(null);
	const [imgIndex, setImgIndex] = useState<number>(0);

	// Helper to reset image index when opening a new card
	const handleOpen = (idx: number) => {
		setSelected(idx);
		setImgIndex(0);
	};

	// For modal navigation
	const handlePrev = () => {
		if (selected === null) return;
		const item = galleryItems[selected];
		if (item.type === "image" && item.srcs) {
			setImgIndex((prev) => (prev - 1 + item.srcs.length) % item.srcs.length);
		}
	};
	const handleNext = () => {
		if (selected === null) return;
		const item = galleryItems[selected];
		if (item.type === "image" && item.srcs) {
			setImgIndex((prev) => (prev + 1) % item.srcs.length);
		}
	};

	// Split galleryItems into rows
	const rows = [];
	for (let i = 0; i < galleryItems.length; i += CARDS_PER_ROW) {
		rows.push(galleryItems.slice(i, i + CARDS_PER_ROW));
	}

	return (
		<MainLayout>
			<main className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#f5f7fa] pt-32 pb-16 px-4">
				<h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#ff6a00] mb-4 font-serif tracking-tight">
					Scotchstone Gallery
				</h1>
				<p className="text-center text-lg text-gray-200 mb-10 font-light max-w-2xl mx-auto">
					Explore our curated collection of luxury spaces, inspiring scenes, and
					interactive videos. Click any card to view details and immerse yourself
					in the Scotchstone experience.
				</p>

				{/* Gallery Grid with row dividers */}
				<section className="max-w-6xl mx-auto">
					{rows.map((row, rowIdx) => (
						<React.Fragment key={rowIdx}>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
								{row.map((item, idx) => (
									<div
										key={item.type === "image" ? item.srcs[0] : item.src}
										className="relative rounded-2xl overflow-hidden shadow-lg bg-white/10 cursor-pointer hover:scale-105 transition-transform duration-200"
										onClick={() => handleOpen(rowIdx * CARDS_PER_ROW + idx)}
										tabIndex={0}
										aria-label={`Open ${item.title}`}
										style={{
											minHeight: CARD_HEIGHT + CARD_CONTENT_HEIGHT - CARD_CONTENT_OVERLAP,
											maxHeight: CARD_HEIGHT + CARD_CONTENT_HEIGHT - CARD_CONTENT_OVERLAP,
										}}
									>
										<div className="relative" style={{ height: CARD_HEIGHT }}>
											{item.type === "video" && <VideoIcon />}
											{item.type === "image" ? (
												<Image
													src={item.srcs[0]}
													alt={item.alt || item.title}
													width={400}
													height={CARD_HEIGHT}
													className="object-cover w-full"
													priority={rowIdx * CARDS_PER_ROW + idx === 0}
													style={{ height: CARD_HEIGHT, width: "100%" }}
												/>
											) : (
												<video
													src={item.src}
													className="object-cover w-full"
													style={{ height: CARD_HEIGHT, width: "100%" }}
													controls={false}
													muted
													loop
													playsInline
													preload="metadata"
													onMouseOver={(e) =>
														(e.currentTarget as HTMLVideoElement).play()
													}
													onMouseOut={(e) =>
														(e.currentTarget as HTMLVideoElement).pause()
													}
												/>
											)}
										</div>
										<div
											className="flex flex-col gap-1 p-2 bg-black/80 text-white rounded-b-2xl"
											style={{
												position: "absolute",
												left: 0,
												right: 0,
												bottom: 0,
												transform: `translateY(${CARD_CONTENT_OVERLAP - 25}px)`, // move up by 1rem (16px)
												zIndex: 10,
											}}
										>
											<h2 className="text-base font-semibold">{item.title}</h2>
											<p className="text-[11px]">{item.description}</p>
										</div>
									</div>
								))}
							</div>
							{/* Divider line between rows, except after last row */}
							{rowIdx < rows.length - 1 && (
								<div className="my-6">
									<hr className="border-t-2 border-gray-300" />
								</div>
							)}
						</React.Fragment>
					))}
				</section>

				{/* Modal for image/video preview */}
				{selected !== null && (
					<div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
						onClick={() => setSelected(null)}
					>
						<div
							className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-6 relative animate-fade-in"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								className="absolute top-4 right-4 text-2xl text-[#ff6a00] hover:text-black transition"
								onClick={() => setSelected(null)}
								aria-label="Close"
							>
								&times;
							</button>
							{galleryItems[selected].type === "image" ? (
								<div className="relative">
									<Image
										src={galleryItems[selected].srcs[imgIndex]}
										alt={
											galleryItems[selected].alt ||
											galleryItems[selected].title
										}
										width={800}
										height={400}
										className="rounded-xl object-cover w-full mb-4"
									/>
									{galleryItems[selected].srcs.length > 1 && (
										<>
											<button
												className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-[#ff6a00] transition"
												onClick={handlePrev}
												aria-label="Previous image"
												type="button"
											>
												&#8592;
											</button>
											<button
												className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-[#ff6a00] transition"
												onClick={handleNext}
												aria-label="Next image"
												type="button"
											>
												&#8594;
											</button>
										</>
									)}
								</div>
							) : (
								<div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
									<VideoIcon />
									<iframe
										src={getYouTubeEmbedUrl(galleryItems[selected].src)}
										title={galleryItems[selected].title}
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										className="w-full h-full"
									></iframe>
								</div>
							)}
							<div className="flex items-center justify-between mb-2">
								<h2 className="text-2xl font-bold text-[#22304a]">
									{galleryItems[selected].title}
								</h2>
							</div>
							<p className="text-base text-[#22304a] mb-2">
								{galleryItems[selected].description}
							</p>
						</div>
					</div>
				)}
			</main>
		</MainLayout>
	);
}