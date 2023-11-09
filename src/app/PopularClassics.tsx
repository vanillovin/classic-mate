"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
	subsets: ["latin"],
	weight: ["400"],
});

function PopularClassics({
	classicsByLikeCount,
}: {
	classicsByLikeCount: Classic[];
}) {
	return (
		<div className="carousel w-full mt-4">
			<div id="slide1" className="carousel-item relative w-full">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-1 mobile:gap-2 p-0 md:px-8">
					{classicsByLikeCount?.slice(0, 4).map((classic, index) => (
						<Link
							key={index}
							href={`/classics/${classic.id}`}
							className="rounded-md p-2 flex flex-col gap-y-1 mobile:gap-y-2 justify-between shadow-sm bg-white hover:bg-old-palette-cream transition-colors"
						>
							<div className="flex flex-col items-center gap-y-1">
								<p
									className={`text-2xl sm:text-3xl font-semibold text-vintage-holiday-brown ${dmSerifDisplay.className}`}
								>
									- {index + 1} -
								</p>
								<p className="font-semibold text-sm md:text-base text-center">
									{classic.title}
								</p>
								<p className="text-xs md:text-sm">
									{classic.description.substring(0, 65)}...
								</p>
							</div>
							<div className="w-full h-[100px] mobile:h-[150px] relative rounded-sm overflow-hidden">
								<Image
									fill
									alt={"composer"}
									src={classic.cover_image}
									className="w-full h-full"
								/>
							</div>
						</Link>
					))}
				</div>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-0 md:left-2 right-0 md:right-2 top-1/2">
					<a href="#slide4" className="btn btn-circle shadow-md">
						❮
					</a>
					<a href="#slide2" className="btn btn-circle shadow-md">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-1 mobile:gap-2 p-0 md:px-8">
					{classicsByLikeCount?.slice(4, 8).map((classic, index) => (
						<Link
							key={index}
							href={`/classics/${classic.id}`}
							className="rounded-md p-2 flex flex-col gap-y-1 mobile:gap-y-2 justify-between shadow-sm bg-white hover:bg-old-palette-cream transition-colors"
						>
							<div className="flex flex-col items-center gap-y-1">
								<p
									className={`text-2xl font-semibold text-vintage-holiday-brown ${dmSerifDisplay.className}`}
								>
									- {index + 5} -
								</p>
								<p className="font-semibold text-sm md:text-base text-center">
									{classic.title}
								</p>
								<p className="text-xs md:text-sm">
									{classic.description.substring(0, 65)}...
								</p>
							</div>
							<div className="w-full h-[100px] mobile:h-[150px] relative rounded-sm overflow-hidden">
								<Image
									fill
									alt={"composer"}
									src={classic.cover_image}
									className="w-full h-full"
								/>
							</div>
						</Link>
					))}
				</div>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-0 md:left-2 right-0 md:right-2 top-1/2">
					<a href="#slide1" className="btn btn-circle shadow-md">
						❮
					</a>
					<a href="#slide3" className="btn btn-circle shadow-md">
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-1 mobile:gap-2 p-0 md:px-8">
					{classicsByLikeCount?.slice(8, 12).map((classic, index) => (
						<Link
							key={index}
							href={`/classics/${classic.id}`}
							className="rounded-md p-2 flex flex-col gap-y-1 mobile:gap-y-2 justify-between shadow-sm bg-white hover:bg-old-palette-cream transition-colors"
						>
							<div className="flex flex-col items-center gap-y-1">
								<p
									className={`text-2xl font-semibold text-vintage-holiday-brown ${dmSerifDisplay.className}`}
								>
									- {index + 9} -
								</p>
								<p className="font-semibold text-sm md:text-base text-center">
									{classic.title}
								</p>
								<p className="text-xs md:text-sm">
									{classic.description.substring(0, 65)}...
								</p>
							</div>
							<div className="w-full h-[100px] mobile:h-[150px] relative rounded-sm overflow-hidden">
								<Image
									fill
									alt={"composer"}
									src={classic.cover_image}
									className="w-full h-full"
								/>
							</div>
						</Link>
					))}
				</div>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-0 md:left-2 right-0 md:right-2 top-1/2">
					<a href="#slide2" className="btn btn-circle shadow-md">
						❮
					</a>
					<a href="#slide4" className="btn btn-circle shadow-md">
						❯
					</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative w-full">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-1 mobile:gap-2 p-0 md:px-8">
					{classicsByLikeCount?.slice(12, 16).map((classic, index) => (
						<Link
							key={index}
							href={`/classics/${classic.id}`}
							className="rounded-md p-2 flex flex-col gap-y-1 mobile:gap-y-2 justify-between shadow-sm bg-white hover:bg-old-palette-cream transition-colors"
						>
							<div className="flex flex-col items-center gap-y-1">
								<p
									className={`text-2xl font-semibold text-vintage-holiday-brown ${dmSerifDisplay.className}`}
								>
									- {index + 13} -
								</p>
								<p className="font-semibold text-sm md:text-base text-center">
									{classic.title}
								</p>
								<p className="text-xs md:text-sm">
									{classic.description.substring(0, 65)}...
								</p>
							</div>
							<div className="w-full h-[100px] mobile:h-[150px] relative rounded-sm overflow-hidden">
								<Image
									fill
									alt={"composer"}
									src={classic.cover_image}
									className="w-full h-full"
								/>
							</div>
						</Link>
					))}
				</div>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-0 md:left-2 right-0 md:right-2 top-1/2">
					<a href="#slide3" className="btn btn-circle shadow-md">
						❮
					</a>
					<a href="#slide1" className="btn btn-circle shadow-md">
						❯
					</a>
				</div>
			</div>
		</div>
	);
}

export default PopularClassics;
