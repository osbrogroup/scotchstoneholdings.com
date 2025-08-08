import React from 'react';
import { FaHome, FaHandshake, FaChartLine } from 'react-icons/fa';

const highlights = [
	{
		icon: <FaHome className="text-primary text-3xl mb-2" />,
		title: 'Diverse Property Portfolio',
		description:
			'From luxury apartments to commercial spaces, we offer a wide range of investment opportunities.',
	},
	{
		icon: <FaHandshake className="text-primary text-3xl mb-2" />,
		title: 'Trusted by Clients',
		description:
			'Our reputation is built on transparency, integrity, and delivering results for our clients.',
	},
	{
		icon: <FaChartLine className="text-primary text-3xl mb-2" />,
		title: 'High ROI',
		description:
			'We focus on properties with strong growth potential and attractive returns on investment.',
	},
];

const ServiceHighlights = () => (
	<section className="py-10 bg-white">
		<h2
			className="text-2xl md:text-3xl font-extrabold text-center mb-6"
			style={{
				color: '#ff6a00',
				textShadow: '0 2px 8px rgba(255,106,0,0.18)',
			}}
		>
			Why Choose Scotch Stone Holdings?
		</h2>
		<hr className="border-t border-orange-200 my-2 w-1/2 mx-auto" />
		<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
			{highlights.map((item, idx) => (
				<div
					key={idx}
					className="flex flex-col items-center max-w-xs text-center p-6 border-2 border-primary/20 rounded-2xl shadow-xl bg-white hover:scale-105 transition-transform duration-200 gap-2"
				>
					{React.cloneElement(item.icon, {
						className: 'text-3xl mb-2',
						style: { color: '#ff6a00' },
					})}
					<h3
						className="text-lg font-extrabold mb-1"
						style={{
							color: '#ff6a00',
							textShadow: '0 1px 4px rgba(255,106,0,0.10)',
						}}
					>
						{item.title}
					</h3>
					<hr className="border-t border-orange-200 w-1/2 mx-auto my-1" />
					<p className="text-black font-semibold text-sm mb-1">
						{item.description}
					</p>
				</div>
			))}
		</div>
	</section>
);

export default ServiceHighlights;
