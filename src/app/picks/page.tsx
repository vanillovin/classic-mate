import React from "react";
import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";

import { siteConfig } from "@/config/site";
import { createServerClient } from "@/utils/supabase-server";
import TimeClassicalMusic from "./TimeClassicalMusic";
import WeatherClassicalMusic from "./WeatherClassicalMusic";
import ComposerClassicalMusic from "./ComposerClassicalMusic";
import GenreClassicalMusic from "./GenreClassicalMusic";
import RandomClassicalMusic from "./RandomClassicalMusic";
import MoodClassicalMusic from "./MoodClassicalMusic";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const dmSerifDisplay = DM_Serif_Display({
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata: Metadata = siteConfig.metaData["picks"];

export default async function PicksPage() {
	const supabase = createServerClient();
	const { data } = await supabase.from("all_classics").select();

	return (
		<div className="flex flex-col px-3 sm:px-6 sm:pt-6 pb-24 gap-y-8 sm:gap-y-16 -mt-2 sm:-mt-4 pt-8 w-full h-full bg-pantone-white-pepper">
			<div className="max-w-6xl mx-auto">
				<div className="rounded-sm border border-black bg-pantone-babys-breath shadow-md p-3 sm:p-4">
					<div className="font-semibold text-lg sm:text-2xl">
						무슨 클래식 음악을 들어야 할지 모르겠다면?
						<br />
						<span className="text-vintage-holiday-red">클메</span>
						가 추천해드릴게요!
					</div>

					<ul className="w-fit flex flex-wrap items-center mt-2">
						{recommendations.map((item, index) => (
							<li
								key={item.id}
								className="text-sm sm:text-lg hover:underline hover:text-autumn-emerald"
							>
								<a href={item.link} className="p-1">
									{item.label}
								</a>
								{index !== recommendations.length - 1 && (
									<span className="">|</span>
								)}
							</li>
						))}
					</ul>
				</div>

				<section id="time">
					<h2
						className={`mb-4 text-center text-2xl sm:text-4xl font-semibold drop-shadow-lg ${dmSerifDisplay.className}`}
					>
						Time.
					</h2>
					{/* <p className='text-center text-pantone-dark-navy'>
            시간대별 듣기 좋은 클래식
          </p> */}
					<TimeClassicalMusic />
				</section>

				<section id="weather">
					<h2
						className={`mb-4 text-center text-2xl sm:text-4xl font-semibold drop-shadow-lg ${dmSerifDisplay.className}`}
					>
						Weather.
					</h2>
					<WeatherClassicalMusic />
				</section>

				<section id="composer" className="h-96">
					<h2
						className={`mb-4 text-center text-2xl sm:text-4xl font-semibold drop-shadow-lg ${dmSerifDisplay.className}`}
					>
						Composer.
					</h2>
					<ComposerClassicalMusic />
				</section>

				<section id="genre" className="">
					<h2
						className={`mb-4 text-center text-2xl sm:text-4xl font-semibold drop-shadow-lg ${dmSerifDisplay.className}`}
					>
						Genre.
					</h2>
					<GenreClassicalMusic classics={data ?? []} />
				</section>

				<section id="random" className="">
					<h2
						className={`mb-4 text-center text-2xl sm:text-4xl font-semibold drop-shadow-lg ${dmSerifDisplay.className}`}
					>
						Random.
					</h2>
					<RandomClassicalMusic classics={data ?? []} />
				</section>

				<section id="mood" className="">
					<h2
						className={`mb-4 text-center text-2xl sm:text-4xl font-semibold drop-shadow-lg ${dmSerifDisplay.className}`}
					>
						Mood.
					</h2>
					<MoodClassicalMusic />
				</section>

				<ScrollToTopButton />
			</div>
		</div>
	);
}

const recommendations = [
	{ id: "time", label: "시간대별", link: "#time" },
	{ id: "weather", label: "날씨별", link: "#weather" },
	{ id: "composer", label: "작곡가별", link: "#composer" },
	{ id: "genre", label: "장르별", link: "#genre" },
	{ id: "random", label: "랜덤", link: "#random" },
	{ id: "mood", label: "기분별", link: "#mood" },
];
