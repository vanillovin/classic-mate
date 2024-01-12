"use client";

import { dailyQuoteData } from "../../app/data";
import { getCurrentDateInfo } from "@/utils/dateUtils";

const bgImgUrl =
	"https://plus.unsplash.com/premium_photo-1674917070243-905c3bbf1576?q=80&w=1226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function DailyQuote() {
	const { currentDateString } = getCurrentDateInfo();
	const currentQuote =
		dailyQuoteData[currentDateString] ?? dailyQuoteData["2023-08-11"];

	return (
		<div
			style={{
				backgroundImage: `url(${bgImgUrl})`,
			}}
			className={`mt-4 relative w-full h-96 mobile:h-88 bg-center flex items-center justify-center bg-cover rounded-md shadow-md`}
		>
			<div className="absolute w-full h-full rounded-md bg-white/20"></div>
			<div className="absolute p-4 w-60 h-60 mobile:w-72 mobile:h-72 shadow-lg rounded-lg flex flex-col gap-y-2 items-center justify-center bg-white/80">
				<p className="text-2xl sm:text-3xl -mb-4 text-gray-600">❝</p>
				<p className="text-center whitespace-pre-line text-sm sm:text-base font-medium my-1">
					{currentQuote.sentence}
				</p>
				<p className="text-2xl sm:text-3xl text-gray-600 -mt-2">❞</p>
				<p className="text-sm sm:text-base -mt-4">-{currentQuote.author}-</p>
			</div>
		</div>
	);
}

export default DailyQuote;
