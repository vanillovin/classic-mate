"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

import useTimeOfDay, { emojiByTimeOfDay } from "@/hooks/useTimeOfDay";
import { getCurrentDateInfo } from "@/utils/dateUtils";
import { monthMusics, musicPlayerBackgroundImageURLs } from "./data";
import useCurrentTime from "@/hooks/useCurrentTime";

function MusicPlayer() {
	const timeOfDay = useTimeOfDay();
	const currentTime = useCurrentTime();
	const [duration, setDuration] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [audioCurrentTime, setAudioCurrentTime] = useState(0);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const { currentYearMonth } = getCurrentDateInfo();
	const { title, coverImgUrl, musicSrcUrl } = monthMusics[currentYearMonth];

	const playAudio = () => {
		audioRef.current?.play();
		setIsPlaying(true);
	};

	const pauseAudio = () => {
		audioRef.current?.pause();
		setIsPlaying(false);
	};

	const updateProgress = () => {
		const audioCurrentTime = audioRef.current?.currentTime;
		const duration = audioRef.current?.duration;
		setAudioCurrentTime(audioCurrentTime || 0);
		setDuration(duration || 0);
	};

	const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const time = parseFloat(event.target.value);
		audioRef.current!.currentTime = time;
		setAudioCurrentTime(time);
	};

	const progressValue = isNaN((audioCurrentTime / duration) * 100)
		? 0
		: (audioCurrentTime / duration) * 100;

	const textColor =
		timeOfDay === "morning" || timeOfDay === "afternoon"
			? "text-black"
			: "text-white";

	return (
		<div
			style={{
				backgroundImage: `url(${musicPlayerBackgroundImageURLs[timeOfDay]})`,
				transition: "background-image 0.5s ease-in-out",
			}}
			className="relative w-full h-full px-6 py-16 sm:p-12 flex flex-col sm:flex-row items-center bg-center bg-cover rounded-md shadow-md select-none"
		>
			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white/10" />
			<div className="flex relative items-center justify-between">
				<div className="w-24 h-24 sm:w-36 sm:h-36 relative overflow-hidden rounded-sm shadow-lg -ml-16 sm:ml-0 z-[1]">
					<Image
						fill={true}
						alt="album-cover"
						src={coverImgUrl}
						className="object-cover"
					/>
					<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/10">
						<button
							aria-label={!isPlaying ? "재생" : "정지"}
							onClick={!isPlaying ? playAudio : pauseAudio}
							className="p-4 hover:opacity-80"
						>
							{!isPlaying ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 sm:w-10 h-6 sm:h-10 text-white opacity-80"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 sm:w-10 h-6 sm:h-10 text-white opacity-80"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
				<div className="absolute -left-4 sm:left-16 w-24 h-24 sm:w-36 sm:h-36 bg-black rounded-full overflow-hidden shadow-lg">
					<div
						className={`w-full h-full bg-center bg-no-repeat bg-contain
            ${isPlaying ? "animate-spin-slow" : ""}
          `}
					>
						<Image
							fill
							alt="CD"
							src="https://jdmvzmienwxdttefufzf.supabase.co/storage/v1/object/sign/my%20bucket/public/cd.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteSBidWNrZXQvcHVibGljL2NkLnBuZyIsImlhdCI6MTY5MzM3NjczOCwiZXhwIjoxNzI0OTEyNzM4fQ.doA15hMyMmeExdoqOmubb0HaLTgf3qs13ItqGYm9iXY&t=2023-08-30T06%3A25%3A38.649Z"
							className="w-full h-full"
						/>
					</div>
				</div>
			</div>

			<div className="flex-grow sm:ml-32 mt-4 sm:mt-0">
				<div className="relative">
					<progress
						max={100}
						value={progressValue}
						className="w-full [&::-webkit-progress-bar]:h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg 
              [&::-webkit-progress-bar]:bg-white/40 [&::-webkit-progress-value]:bg-white [&::-moz-progress-bar]:bg-white"
					></progress>
					<input
						type="range"
						min={0}
						max={duration}
						value={audioCurrentTime}
						onInput={handleProgressChange}
						className="bg-transparent w-full appearance-none absolute top-0 left-0 cursor-pointer"
						aria-label="재생 진행률"
					/>
				</div>
				<audio
					src={musicSrcUrl}
					ref={audioRef}
					onTimeUpdate={updateProgress}
					onLoadedMetadata={updateProgress}
					aria-label={`현재 재생 중인 음악: ${title}`}
					onEnded={() => setIsPlaying(false)}
				/>
				<div
					className={`text-sm sm:text-lg font-medium text-center sm:text-start leading-4 ${textColor}`}
				>
					{title}
				</div>
				<div
					className={`flex items-center justify-center sm:justify-start gap-x-1 text-sm sm:text-base leading-4 font-light mt-3 sm:-mb-6 ${textColor}`}
				>
					<div className="rounded-full px-2 font-semibold shadow-md bg-white text-black">
						now
					</div>{" "}
					<span className="font-medium">
						{currentTime} {emojiByTimeOfDay[timeOfDay]}
					</span>
				</div>
			</div>
		</div>
	);
}

export default MusicPlayer;
