import { useState, useEffect } from "react";

function useCurrentTime() {
	const [currentTime, setCurrentTime] = useState<string>("");

	useEffect(() => {
		function updateTime() {
			const now = new Date();
			const currentHour = now.getHours();
			const currentMinute = now.getMinutes();
			const currentTimeString = `${currentHour}:${
				currentMinute < 10 ? `0${currentMinute}` : currentMinute
			}`;

			setCurrentTime(currentTimeString);

			const timeoutId = setTimeout(updateTime, 60 * 1000);

			return () => clearTimeout(timeoutId);
		}
		updateTime();
	}, []);

	return currentTime;
}

export default useCurrentTime;
