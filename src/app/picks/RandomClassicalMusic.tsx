"use client";

import Link from "next/link";
import React, { useState } from "react";

function RandomClassicalMusic({ classics }: { classics: Classic[] }) {
	const [randomClassic, setRandomClassic] = useState<Classic>();

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="relative border-8 bg-white w-full sm:w-[500px] h-[350px] sm:h-[450px] overflow-hidden rounded-tl-lg rounded-tr-lg shadow-sm">
				{Items()}
				<div className="absolute z-10 w-full h-full bg-opacity-40 bg-gradient-to-br from-white via-blue-200 to-blue-400 opacity-30"></div>
			</div>
			<div className="flex gap-4 sm:gap-8 items-center justify-center border-8 w-full sm:w-[500px] h-[200px] sm:h-[300px] rounded-bl-lg rounded-br-lg shadow-md bg-bluegold-palette-blue1">
				<button
					tabIndex={0}
					aria-label="랜덤 클래식 음악 추천 버튼"
					onClick={() => setRandomClassic(getRandomElement(classics))}
					className="w-28 sm:w-36 h-28 sm:h-36 font-medium rounded-full text-base sm:text-lg bg-vintage-holiday-red text-pantone-babys-breath hover:bg-opacity-70 active:scale-90 shadow-sm"
				>
					click!
				</button>
				<div className="w-28 sm:w-36 h-28 sm:h-36 rounded-sm bg-vintage-holiday-gray flex items-center justify-center shadow-sm">
					{randomClassic ? (
						<Link
							tabIndex={0}
							target="_blank"
							href={`/classics/${randomClassic?.id}`}
							aria-label={`${randomClassic?.title} 상세 정보 보기`}
							className={`w-24 sm:w-28 h-24 sm:h-28 font-medium text-sm sm:text-base text-center p-1 sm:p-2 rounded-full flex items-center justify-center 
                shadow-[inset_0_-8px_8px_rgba(0,0,0,.1)] hover:underline underline-offset-auto hover:bg-opacity-70 ${
									bgColors[Math.floor(Math.random() * bgColors.length)]
								}
              `}
						>
							<span className="leading-4 sm:leading-5 tracking-tighter font-medium text-white">
								{randomClassic?.title}
							</span>
						</Link>
					) : (
						<div className="text-center text-sm sm:text-base p-2 text-pantone-starwhite">
							버튼을 클릭해 랜덤 클래식 음악을 추천받으세요!
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default RandomClassicalMusic;

function getRandomElement<T>(array: T[]): T | undefined {
	if (array.length === 0) {
		return undefined;
	}

	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

function Items() {
	return (
		<>
			<div
				className={`shadow-[inset_0_-8px_8px_rgba(0,0,0,.1)] absolute bottom-0 -left-4 rounded-full flex items-center justify-center text-center w-20 sm:w-32 h-20 sm:h-32 p-4 bg-autumn-gold`}
			/>
			<div
				className={`shadow-[inset_0_-8px_8px_rgba(0,0,0,.1)] absolute bottom-4 left-28 rounded-full flex items-center justify-center text-center w-20 sm:w-32 h-20 sm:h-32 p-4 bg-old-palette-blue`}
			/>
			<div
				className={`shadow-[inset_0_-8px_8px_rgba(0,0,0,.1)] absolute -bottom-8 left-12 sm:left-72 rounded-full flex items-center justify-center text-center w-20 sm:w-32 h-20 sm:h-32 p-4 bg-[#80558C]`}
			/>
			<div
				className={`shadow-[inset_0_-8px_8px_rgba(0,0,0,.1)] absolute -bottom-4 sm:bottom-0 left-36 sm:left-96 rounded-full flex items-center justify-center text-center w-20 sm:w-32 h-20 sm:h-32 p-4 bg-pantone-brandy-sniffer`}
			/>
			<div
				className={`shadow-[inset_0_-8px_8px_rgba(0,0,0,.1)] absolute -bottom-4 sm:bottom-0 left-96 sm:left-80 rounded-full flex items-center justify-center text-center w-20 sm:w-32 h-20 sm:h-32 p-4 bg-[#EE7214]`}
			/>
			<div
				className={`shadow-[inset_0_-8px_8px_rgba(0,0,0,.1)] absolute bottom-6 left-52 rounded-full flex items-center justify-center text-center w-20 sm:w-32 h-20 sm:h-32 p-4 bg-vintage-holiday-green`}
			/>
			<div
				className={`shadow-[inset_0_-8px_8px_rgba(0,0,0,.1)] absolute -bottom-2 sm:-bottom-6 left-60 rounded-full flex items-center justify-center text-center w-20 sm:w-32 h-20 sm:h-32 p-4 bg-[#EEC373]`}
			/>
			<div
				className={`shadow-[inset_0_-8px_8px_rgba(0,0,0,.1)] absolute -bottom-12 left-20 rounded-full flex items-center justify-center text-center w-20 sm:w-32 h-20 sm:h-32 p-4 bg-[#4F709C]`}
			/>
			<div
				className={`shadow-[inset_0_-8px_8px_rgba(0,0,0,.1)] absolute -bottom-1 left-72 rounded-full flex items-center justify-center text-center w-20 sm:w-32 h-20 sm:h-32 p-4 bg-autumn-darkred`}
			/>
			{bgColors.map((color) => (
				<div
					key={color}
					className={`shadow-[inset_0_-8px_8px_rgba(0,0,0,.1)] absolute rounded-full flex items-center justify-center text-center w-20 sm:w-32 h-20 sm:h-32 p-4 ${color}`}
					style={{
						bottom: `${Math.random() * 50 - 10}%`,
						left: `${Math.random() * 110 - 10}%`,
					}}
				></div>
			))}
		</>
	);
}

const bgColors = [
	"bg-[#102C57]",
	"bg-[#916DB3]",
	"bg-[#FFB000]",
	"bg-[#004225]",
	"bg-[#527853]",
	"bg-[#9A3B3B]",
	"bg-[#C08261]",
	"bg-[#E2C799]",
	"bg-[#F7E987]",
	"bg-[#6C3428]",
	"bg-[#5B9A8B]",
	"bg-[#BB6464]",
	"bg-pantone-cocoa",
];
