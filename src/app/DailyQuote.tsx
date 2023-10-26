"use client";

import React from "react";
import { dailyQuoteData } from "./data";
import { getCurrentDateInfo } from "@/utils/dateUtils";

function DailyQuote() {
	const { currentDateString } = getCurrentDateInfo();
	const currentQuote =
		dailyQuoteData[currentDateString] ?? dailyQuoteData["2023-08-11"];

	return (
		<div
			style={{
				backgroundImage: `url(${"https://cdn.pixabay.com/photo/2018/01/05/02/40/shellfish-3062011_1280.jpg"})`,
			}}
			className={`mt-4 relative w-full h-96 mobile:h-88 bg-center flex items-center justify-center bg-cover rounded-md shadow-md`}
		>
			<div className="absolute bg-opacity-40 w-full h-full rounded-md bg-white "></div>
			<div className="absolute p-4 w-60 h-60 mobile:w-72 mobile:h-72 shadow-lg rounded-lg flex flex-col gap-y-2 items-center justify-center bg-opacity-80 bg-white">
				<p className="text-2xl sm:text-3xl text-gray-600 -mb-4">❝</p>
				<p className="text-center whitespace-pre-line text-base sm:text-lg font-medium my-1">
					{currentQuote.sentence}
				</p>
				<p className="text-2xl sm:text-3xl text-gray-600 -mt-2">❞</p>
				<p className="text-sm sm:text-base -mt-4">-{currentQuote.author}-</p>
			</div>
		</div>
	);
}

export default DailyQuote;
