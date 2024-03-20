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
	const { data } = await supabase.from("classical_music").select();

	return (
		<div className="scroll-smooth px-3 sm:px-6 pt-20 sm:pt-32 pb-24 -mt-14 sm:-mt-20 w-full h-full bg-pantone-white-pepper/70">
			<div className="max-w-6xl mx-auto flex flex-col gap-y-10 sm:gap-y-20">
				<div className="rounded-sm shadow-lg p-3 sm:p-4 bg-pantone-powder/80">
					<div className="font-semibold text-lg sm:text-2xl">
						무슨 클래식 음악을 들어야 할지 모르겠다면?
						<br />
						<span className="text-vintage-holiday-red">꿀메</span>
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

				<section id="time" className="scroll-mt">
					<h2
						className={`text-center text-3xl sm:text-4xl font-semibold drop-shadow-lg ${dmSerifDisplay.className}`}
					>
						Time.
					</h2>
					<p className="text-center text-sm sm:text-base pt-3 py-6 text-pantone-dark-navy">
						하루를 완성하는 클래식 음악, 시간대별 듣기 좋은 곡을 추천해드릴게요.
					</p>
					<TimeClassicalMusic />
				</section>

				<section id="weather" className="scroll-mt">
					<h2
						className={`text-center text-3xl sm:text-4xl font-semibold drop-shadow-lg ${dmSerifDisplay.className}`}
					>
						Weather.
					</h2>
					<p className="text-center text-sm sm:text-base pt-3 py-6 text-pantone-dark-navy">
						현재 날씨와 어울리는 클래식 음악으로 하루를 더욱 특별하게 만들어
						보세요.
					</p>
					<WeatherClassicalMusic />
				</section>

				<section id="composer" className="scroll-mt h-96">
					<h2
						className={`text-center text-3xl sm:text-4xl font-semibold drop-shadow-lg ${dmSerifDisplay.className}`}
					>
						Composer.
					</h2>
					<p className="text-center text-sm sm:text-base pt-3 py-6 text-pantone-dark-navy">
						클래식 작곡가들과 그들이 선사하는 음악 세계를 만나보세요.
					</p>
					<ComposerClassicalMusic />
				</section>

				<section id="genre" className="scroll-mt">
					<h2
						className={`text-center text-3xl sm:text-4xl font-semibold drop-shadow-lg ${dmSerifDisplay.className}`}
					>
						Genre.
					</h2>
					<p className="text-center text-sm sm:text-base pt-3 py-6 text-pantone-dark-navy">
						다양한 장르의 클래식 곡들로 음악적 스펙트럼을 넓혀보세요!
					</p>
					<GenreClassicalMusic classics={data ?? []} />
				</section>

				<section id="random" className="scroll-mt">
					<h2
						className={`text-center text-3xl sm:text-4xl font-semibold drop-shadow-lg ${dmSerifDisplay.className}`}
					>
						Random.
					</h2>
					<p className="text-center text-sm sm:text-base pt-3 py-6 text-pantone-dark-navy">
						어떤 곡이 당신을 기다리고 있을까요? 랜덤 버튼을 클릭해보세요!
					</p>
					<RandomClassicalMusic classics={data ?? []} />
				</section>

				<section id="mood" className="scroll-mt">
					<h2
						className={`text-center text-3xl sm:text-4xl font-semibold drop-shadow-lg ${dmSerifDisplay.className}`}
					>
						Mood.
					</h2>
					<p className="text-center text-sm sm:text-base pt-3 py-6 text-pantone-dark-navy">
						오늘은 어떤 기분인가요? 당신의 감정 온도에 맞는 클래식 음악 추천해
						드립니다 :)
					</p>
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
