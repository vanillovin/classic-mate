"use client";

import React, { useState } from "react";

import { quizData } from "./data";
import { getCurrentDateInfo } from "@/utils/dateUtils";

function ClassicQuiz() {
	const [userAnswer, setUserAnswer] = useState<number | null>(null);
	const { currentDateString, currentDay } = getCurrentDateInfo();
	const currentQuiz = quizData[currentDateString] ?? quizData["2023-10-01"];

	const renderOptions = () => {
		return currentQuiz.options.map((option, index) => (
			<label
				key={index}
				className="flex items-center justify-center gap-1 cursor-pointer"
			>
				<input
					type="radio"
					value={index}
					checked={userAnswer === index}
					onChange={(e) => setUserAnswer(parseInt(e.target.value))}
					className="radio checked:bg-warm-vintage-burnt-orange border mr-1"
					aria-label={`선택지 ${index + 1}: ${option}`}
				/>
				{option}
			</label>
		));
	};

	return (
		<div className="w-full p-4 rounded-md shadow-md text-center bg-white/90 text-black">
			<h2 className="flex flex-col items-center justify-center font-semibold text-2xl sm:text-3xl gap-3 drop-shadow-md">
				<span className="text-sm sm:text-base px-3 py-1 rounded-full bg-autumn-gold">
					{currentDateString.replaceAll("-", ". ")} {currentDay}
				</span>
				오늘의 클래식 퀴즈!
			</h2>
			<h3 className="font-medium text-lg sm:text-2xg pt-3 pb-1 underline underline-offset-4">
				Q. {currentQuiz.question}
			</h3>
			<div className="text-sm sm:text-base flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-2 py-2 sm:py-4">
				{renderOptions()}
			</div>
			<div>
				{userAnswer !== null ? (
					userAnswer === currentQuiz.answer ? (
						<p className="font-semibold text-sm sm:text-base text-autumn-emerald">
							정답입니다!
						</p>
					) : (
						<p className="font-semibold text-sm sm:text-base text-autumn-darkred">
							틀렸습니다. 다시 시도해보세요!
						</p>
					)
				) : null}
			</div>
		</div>
	);
}

export default ClassicQuiz;
