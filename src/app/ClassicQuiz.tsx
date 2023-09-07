"use client";

import React, { useState } from "react";

import { quizData } from "./data";
import { getCurrentDateInfo } from "@/utils/dateUtils";

function ClassicQuiz() {
	const [userAnswer, setUserAnswer] = useState<number | null>(null);
	const { currentDateString, currentDay } = getCurrentDateInfo();
	const currentQuiz = quizData[currentDateString] ?? quizData["2023-08-14"];

	const renderOptions = () => {
		return currentQuiz.options.map((option, index) => (
			<label key={index} className="flex items-center justify-center gap-1">
				<input
					type="radio"
					value={index}
					checked={userAnswer === index}
					onChange={(e) => setUserAnswer(parseInt(e.target.value))}
					className="radio checked:bg-warm-vintage-burnt-orange border mr-1"
				/>
				{option}
			</label>
		));
	};

	return (
		<div className="w-full p-4 bg-white border border-black rounded-sm shadow-md text-center">
			<h2 className="flex flex-col items-center justify-center font-semibold text-2xl sm:text-3xl gap-2 drop-shadow-md">
				<span className="text-sm sm:text-base bg-autumn-gold px-2 py-1 rounded-full">
					{currentDateString.replaceAll("-", ". ")} {currentDay}
				</span>
				오늘의 클래식 퀴즈!
			</h2>
			<h3 className="font-medium text-lg my-1 underline underline-offset-4">
				Q. {currentQuiz.question}
			</h3>
			<div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-2 py-4">
				{renderOptions()}
			</div>
			<div>
				{userAnswer !== null ? (
					userAnswer === currentQuiz.answer ? (
						<p className="font-medium text-autumn-emerald">정답입니다!</p>
					) : (
						<p className="font-medium text-autumn-darkred">
							틀렸습니다. 다시 시도해보세요!
						</p>
					)
				) : null}
			</div>
		</div>
	);
}

export default ClassicQuiz;
