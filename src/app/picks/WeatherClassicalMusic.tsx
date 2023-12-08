"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import type { Coordinates, Weather } from "./types";
import {
	classicsByWeather,
	defaultDaytimeImage,
	defaultNightImage,
} from "./data";

type TimeOfDay = "daytime" | "night";

function WeatherClassicalMusic() {
	const [weather, setWeather] = useState<Weather | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [timeOfDay, setTimeOfDay] = useState<TimeOfDay | null>(null);

	const backgroundImageURL = timeOfDay
		? timeOfDay === "daytime"
			? weather
				? classicsByWeather[weather.weather[0].main].daytimeImage
				: defaultDaytimeImage
			: weather
			? classicsByWeather[weather.weather[0].main].nightImage
			: defaultNightImage
		: defaultDaytimeImage;

	useEffect(() => {
		const currentTime = new Date().getHours();

		if ((currentTime >= 0 && currentTime < 5) || currentTime >= 20) {
			setTimeOfDay("night");
		} else {
			setTimeOfDay("daytime");
		}
	}, []);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position: GeolocationPosition) => {
					const { latitude, longitude }: Coordinates = position.coords;
					fetch(
						`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`,
					)
						.then((res) => res.json())
						.then((data) => setWeather(data))
						.catch((err) => setError("날씨 정보를 불러오지 못했습니다."));
				},
				(error: GeolocationPositionError) => {
					setError(
						"위치에 접근할 수 없습니다. 위치 액세스 허용 후 새로고침 해주세요!",
					);
				},
			);
		} else {
			setError("이 브라우저에서 위치 정보 기능을 지원하지 않습니다.");
		}
	}, []);

	const parentTextColor =
		timeOfDay === "daytime"
			? classicsByWeather[weather ? weather.weather[0].main : "Clear"].textColor
			: "text-warm-vintage-off-white";

	return (
		<div
			style={{ backgroundImage: `url(${backgroundImageURL})` }}
			className="h-64 flex items-center justify-center rounded-sm shadow-lg bg-center bg-cover p-4"
		>
			{weather ? (
				<div
					className={`h-full flex flex-col sm:flex-row items-center justify-center ${parentTextColor}`}
				>
					<div className="flex items-center justify-center bg-white/20 mr-0 sm:mr-2 sm:bg-transparent pl-2 rounded-sm">
						<div className="flex sm:flex-col items-center sm:items-start">
							<p className="font-semibold sm:font-bold text-lg">{`${weather.main.temp.toFixed()}℃`}</p>
							<p className="hidden sm:block font-semibold">
								{weather.name !== "" &&
									`${weather.name}, ${weather.sys.country}`}
							</p>
							<p
								className={`hidden sm:block
                  ${timeOfDay === "daytime" ? "text-gray-600" : "text-gray-400"}
                `}
							>
								{weather.weather[0].description}
							</p>
						</div>
						<div className="w-10 sm:w-20 h-10 sm:h-20 relative overflow-hidden">
							<Image
								fill
								className="w-full h-full"
								alt={weather.weather[0].main}
								src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
							/>
						</div>
					</div>
					<div className="mt-3 sm:mt-0 text-center sm:text-start">
						<h2 className="font-semibold sm:text-lg drop-shadow-md">
							{classicsByWeather[weather.weather[0].main].name}
						</h2>
						<ul className="mt-1 text-sm sm:text-base">
							{classicsByWeather[weather.weather[0].main].data.map(
								(classic) => (
									<li
										key={classic.id}
										className="hover:underline underline-offset-4"
									>
										<Link href={`/classical-music/${classic.id}`}>
											+ {classic.title}
										</Link>
									</li>
								),
							)}
						</ul>
					</div>
				</div>
			) : error ? (
				<div
					className={`font-light 
            ${timeOfDay === "daytime" ? "text-black" : "text-white"}
          `}
				>
					{error}
				</div>
			) : (
				<div
					className={`font-light 
            ${timeOfDay === "daytime" ? "text-black" : "text-white"}
          `}
				>
					날씨 정보를 불러오고 있습니다
				</div>
			)}
		</div>
	);
}

export default WeatherClassicalMusic;
