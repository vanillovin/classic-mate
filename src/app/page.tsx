import { DM_Serif_Display } from "next/font/google";

import ClassicQuiz from "./ClassicQuiz";
import DailyQuote from "./DailyQuote";
import MusicPlayer from "./MusicPlayer";
import Newspaper from "./Newspaper";
import PopularClassics from "./PopularClassics";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { createServerClient } from "@/utils/supabase-server";
import Link from "next/link";

const dmSerifDisplay = DM_Serif_Display({
	subsets: ["latin"],
	weight: ["400"],
});

export default async function HomePage() {
	const supabase = createServerClient();
	const { data: classicsByLikeCount } = await supabase
		.from("all_classics")
		.select("*")
		.order("like_count", { ascending: false })
		.range(0, 15);

	return (
		<div className="w-full max-w-6xl mx-auto h-full px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
			<ClassicQuiz />

			<div className="my-12">
				<h2
					className={`text-2xl sm:text-3xl text-center font-medium drop-shadow-sm text-black`}
				>
					오늘의 한 문장
				</h2>
				<DailyQuote />
			</div>

			<h2
				className={`text-3xl sm:text-4xl text-center drop-shadow-sm text-black 
        ${dmSerifDisplay.className}
      `}
			>
				Month Classical Music
			</h2>

			<div className="flex items-center justify-center my-10">
				<MusicPlayer />
			</div>

			<Newspaper />

			<div className="my-12">
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
