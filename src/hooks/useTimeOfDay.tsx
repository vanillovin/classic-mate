import { useState, useEffect } from "react";

export type TimeOfDay = "dawn" | "morning" | "afternoon" | "evening" | "night";

const DAWN_START_HOUR = 0;
const MORNING_START_HOUR = 5;
const AFTERNOON_START_HOUR = 9;
const EVENING_START_HOUR = 17;
const NIGHT_START_HOUR = 21;

export const emojiByTimeOfDay = {
	dawn: "🌅",
	morning: "🌞",
	afternoon: "🌤️",
	evening: "🌆",
	night: "🌃", // 🌇
};

function useTimeOfDay() {
	const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("dawn");

	useEffect(() => {
		function setTime() {
			const now = new Date();
			const currentHour = now.getHours();
			let nextCheck: Date = calculateNextCheck(currentHour, now);

			// 현재 시간대 설정
			if (currentHour >= DAWN_START_HOUR && currentHour < MORNING_START_HOUR) {
				setTimeOfDay("dawn");
			} else if (
				currentHour >= MORNING_START_HOUR &&
				currentHour < AFTERNOON_START_HOUR
			) {
				setTimeOfDay("morning");
			} else if (
				currentHour >= AFTERNOON_START_HOUR &&
				currentHour < EVENING_START_HOUR
			) {
				setTimeOfDay("afternoon");
			} else if (
				currentHour >= EVENING_START_HOUR &&
				currentHour < NIGHT_START_HOUR
			) {
				setTimeOfDay("evening");
			} else {
				setTimeOfDay("night");
			}

			const timeToNextCheck = nextCheck.getTime() - now.getTime();

			const timeoutId = setTimeout(setTime, timeToNextCheck);

			return () => clearTimeout(timeoutId);
		}

		setTime();
	}, []);

	return timeOfDay;
}

export default useTimeOfDay;

function calculateNextCheck(currentHour: number, now: Date) {
	if (currentHour >= DAWN_START_HOUR && currentHour < MORNING_START_HOUR) {
		return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 5, 0, 0);
	} else if (
		currentHour >= MORNING_START_HOUR &&
		currentHour < AFTERNOON_START_HOUR
	) {
		return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0);
	} else if (
		currentHour >= AFTERNOON_START_HOUR &&
		currentHour < EVENING_START_HOUR
	) {
		return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 0, 0);
	} else if (
		currentHour >= EVENING_START_HOUR &&
		currentHour < NIGHT_START_HOUR
	) {
		return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21, 0, 0);
	} else {
		return new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate() + 1,
			5,
			0,
			0,
		); // 다음 날 새벽 5시
	}
}
