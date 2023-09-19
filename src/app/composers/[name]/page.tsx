import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getComposerById } from "../api";
import TagLinkList from "@/components/TagLinkList";
import { createServerClient } from "@/utils/supabase-server";

export default async function ArtistDetailPage({
	params,
}: { params: { name: string } }) {
	const supabase = createServerClient();
	const composer = decodeURIComponent(params.name);
	const data = await getComposerById(composer);

	const { data: classics } = await supabase
		.from("all_classics")
		.select()
		.eq("composer", composer);

	if (!data) return notFound();

	return (
		<div className="px-3 sm:px-6 pt-3 sm:pt-6 pb-24 flex flex-col gap-y-6">
			<section className="flex flex-col sm:flex-row gap-2">
				<div
					className="flex items-center justify-center w-full sm:w-[250px] h-[350px] sm:h-[450px] md:h-[350px] 
          relative overflow-hidden border border-pantone-metallic-gold rounded-sm shadow-sm"
				>
					<Image
						fill
						src={data.image}
						alt={`${data.englishName} profile image`}
						className="w-full h-full"
					/>
				</div>
				<div className="flex-1 p-2">
					<h2 className="text-lg sm:text-2xl font-semibold">
						{data.englishName}{" "}
						<span className="">
							({data.koreanName}, {data.life})
						</span>
					</h2>
					<p className="mt-2 text-sm sm:text-base whitespace-pre-line">
						{data.description}
					</p>
				</div>
			</section>
			<section className="mt-4 space-y-2">
				<h2 className="text-2xl font-semibold">작품목록</h2>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{classics?.map((classic) => (
						<Link
							key={classic.id}
							href={`/classics/${classic.id}`}
							className="rounded-sm p-4 bg-gradient-conic from-pantone-babys-breath to-old-palette-gold 
                hover:to-pantone-metallic-gold shadow-sm transition-all"
						>
							<h3 className="font-semibold overflow-hidden whitespace-nowrap truncate">
								{classic.title}
							</h3>
							<p className="text-sm">
								{classic.description.length > 100
									? `${classic.description.substring(0, 100)}..`
									: classic.description}
							</p>
							<TagLinkList
								className="text-sm bg-black/95 text-white px-1 mt-1"
								tags={classic.tags}
							/>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}
