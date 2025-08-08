"use client";
import React, { useEffect } from "react";
import { isAdminAuthenticated } from "../../utils/auth";
import { FaBuilding, FaHome, FaBlog, FaImages, FaBriefcase } from "react-icons/fa";

const sections = [
	{
		name: "Properties",
		path: "/admin/properties",
		icon: <FaBuilding className="text-4xl mb-2 text-purple-800" />,
		desc: "Manage all property listings.",
	},
	{
		name: "Short-let",
		path: "/admin/shortlet",
		icon: <FaHome className="text-4xl mb-2 text-teal-800" />,
		desc: "View and edit short-let properties.",
	},
	{
		name: "Blog",
		path: "/admin/blog",
		icon: <FaBlog className="text-4xl mb-2 text-blue-800" />,
		desc: "Publish and manage blog posts.",
	},
	{
		name: "Gallery",
		path: "/admin/gallery",
		icon: <FaImages className="text-4xl mb-2 text-pink-800" />,
		desc: "Organize your gallery media.",
	},
	{
		name: "Opportunities",
		path: "/admin/opportunities",
		icon: <FaBriefcase className="text-4xl mb-2 text-green-800" />,
		desc: "Edit and create new opportunities.",
	},
];

export default function AdminDashboard() {
	useEffect(() => {
		if (!isAdminAuthenticated()) {
			window.location.href = "/admin/login";
		}
	}, []);

	function handleLogout() {
		// Clear auth (adjust based on your auth logic)
		localStorage.removeItem("adminToken");
		window.location.href = "/admin/login";
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 flex flex-col items-center justify-center p-8">
			<div className="w-full flex justify-end mb-4 max-w-3xl">
				<button
					onClick={handleLogout}
					className="bg-red-700 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-red-900 transition"
				>
					Logout
				</button>
			</div>
			<h1 className="text-4xl font-bold mb-10 text-gray-900 drop-shadow text-center">
				Admin Portal
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
				{sections.map((section) => (
					<a
						key={section.name}
						href={section.path}
						className="block bg-white border border-gray-300 rounded-xl shadow-lg p-8 text-gray-900 text-center hover:shadow-xl transition group"
					>
						<div className="flex flex-col items-center mb-2">
							{section.icon}
						</div>
						<div className="text-2xl font-semibold mb-2 group-hover:text-blue-800 transition">
							{section.name}
						</div>
						<div className="text-base text-gray-600">{section.desc}</div>
					</a>
				))}
			</div>
		</div>
	);
}