import Link from "next/link";

import ClassicalMusicQuiz from "@/components/home/ClassicalMusicQuiz";
import DailyQuote from "@/components/home/DailyQuote";
import MusicPlayer from "@/components/home/MusicPlayer";
import Newspaper from "@/components/home/Newspaper";
import PopularClassics from "@/components/home/PopularClassics";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { createServerClient } from "@/utils/supabase-server";

export default async function HomePage() {
	const supabase = createServerClient();
	const { data: classicsByLikeCount } = await supabase
		.from("classical_music")
		.select("*")
		.order("like_count", { ascending: false })
		.range(0, 15);

	return (
		<div className="flex flex-col gap-y-12 w-full max-w-6xl mx-auto h-full px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
			<ClassicalMusicQuiz />

			<div className="">
				<h2
					className={`text-2xl sm:text-3xl text-center font-medium drop-shadow-sm text-black`}
				>
					오늘의 한 문장
				</h2>
				<DailyQuote />
			</div>

			<div className="space-y-6">
				<h2
					className={`text-2xl sm:text-3xl text-center font-medium drop-shadow-sm text-black 
        `}
					// ${dmSerifDisplay.className}
				>
					이 달의 클래식
				</h2>

				<div className="flex items-center justify-center">
					<MusicPlayer />
				</div>

				<Newspaper />
			</div>

			<div className="">
				<div className="flex items-center justify-center gap-x-1 text-2xl sm:text-3xl font-medium text-center drop-shadow-sm text-black">
					<h2>꿀래식 TOP16</h2>
					<Link href="/classics" className="p-2 text-black/60">
						{">"}
					</Link>
				</div>
				<PopularClassics classicsByLikeCount={classicsByLikeCount ?? []} />
			</div>

			<ScrollToTopButton />
		</div>
	);
}
