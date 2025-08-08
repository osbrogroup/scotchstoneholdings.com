import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const properties = [
	{
		slug: 'lekki-apartment',
		title: 'Luxury Apartment in Lekki',
		images: [
			'/images/properties/lekki-apartment/1.jpg',
			'/images/properties/lekki-apartment/2.jpg',
			'/images/properties/lekki-apartment/3.jpg',
		],
		price: '₦120,000,000',
		location: 'Lekki, Lagos',
	},
	{
		slug: 'ikoyi-duplex',
		title: 'Modern Duplex in Ikoyi',
		images: [
			'/images/properties/ikoyi-duplex/1.jpg',
			'/images/properties/ikoyi-duplex/2.jpg',
			'/images/properties/ikoyi-duplex/3.jpg',
		],
		price: '₦250,000,000',
		location: 'Ikoyi, Lagos',
	},
	{
		slug: 'ajah-bungalow',
		title: 'Cozy Bungalow in Ajah',
		images: [
			'/images/properties/ajah-bungalow/1.jpg',
			'/images/properties/ajah-bungalow/2.jpg',
			'/images/properties/ajah-bungalow/3.jpg',
		],
		price: '₦80,000,000',
		location: 'Ajah, Lagos',
	},
];

const PropertyCarousel = () => (
	<section className="py-16 bg-white">
		<h2
			className="text-3xl md:text-4xl font-extrabold text-center mb-10"
			style={{
				color: '#ff6a00',
				textShadow: '0 2px 8px rgba(255,106,0,0.18)',
			}}
		>
			Featured Properties
		</h2>
		<div className="flex flex-col md:flex-row gap-10 justify-center items-center">
			{properties.map((property) => (
				<Link
					key={property.slug}
					href={`/properties/${property.slug}`}
					className="w-80 group"
				>
					<div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-primary/20 hover:scale-105 transition-transform duration-200">
						<div className="relative w-full h-56">
							<Image
								src={property.images[0]}
								alt={property.title}
								fill
								style={{ objectFit: 'cover' }}
								className="transition-opacity duration-300 group-hover:opacity-80"
							/>
						</div>
						<div className="p-6">
							<h3
								className="text-2xl font-extrabold mb-2"
								style={{
									color: '#ff6a00',
									textShadow: '0 1px 4px rgba(255,106,0,0.10)',
								}}
							>
								{property.title}
							</h3>
							<p className="text-black font-bold text-lg mb-1">
								{property.price}
							</p>
							<p className="text-black text-base font-semibold">
								{property.location}
							</p>
							<span className="block mt-4 text-primary font-bold underline">
								View Details
							</span>
						</div>
					</div>
				</Link>
			))}
		</div>
	</section>
);

export default PropertyCarousel;
