import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { createServerClient } from "@/utils/supabase-server";

const styles = {
	workItem:
		"rounded-sm p-4 bg-gradient-conic from-pantone-babys-breath to-old-palette-gold hover:to-pantone-metallic-gold shadow-sm transition-all",
	composerCard:
		"flex items-center justify-center w-5/12 sm:w-full h-[250px] sm:h-[350px] relative overflow-hidden rounded-sm shadow-sm",
	composerInfo:
		"flex-1 flex flex-col justify-center sm:justify-start w-7/12 sm:w-full p-2 text-sm sm:text-base bg-black/90 text-white/90 rounded-sm shadow-sm",
};

export default async function ArtistDetailPage({
	params,
}: { params: { name: string } }) {
	const supabase = createServerClient();
	const decodedName = decodeURIComponent(params.name);

	const [composersData, classicsData] = await Promise.all([
		supabase.from("composers").select().eq("name", decodedName),
		supabase.from("all_classics").select().eq("composer", decodedName),
	]);

	const { data, error } = composersData;
	const { data: classics, error: classicsError } = classicsData;

	const composer = data ? data[0] : null;
	if (composer === null || error) return notFound();

	return (
		<div className="max-w-6xl mx-auto px-3 sm:px-6 pt-3 sm:pt-6 pb-24 flex flex-col gap-y-4">
			<section className="w-full flex flex-col sm:flex-row gap-2">
				<h2 className="sr-only">작곡가 정보</h2>
				<div className="flex flex-row sm:flex-col w-full sm:w-4/12 md:w-3/12 gap-1">
					<ComposerCard composer={composer} />
					<ComposerInfoList composer={composer} />
				</div>
				<div className="w-full sm:w-8/12 md:w-9/12 p-4 bg-white/70 rounded-sm shadow-sm">
					<h3 className="text-lg sm:text-2xl font-semibold">{composer.name}</h3>
					<p className="mt-4 px-1 text-sm sm:text-base whitespace-pre-line">
						{composer.long_desc}
					</p>
				</div>
			</section>
			<section className="mt-4 space-y-2">
				<h2 className="text-2xl font-semibold">작품 목록</h2>
				<section
					aria-labelledby="작품 목록"
					className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
				>
					{!classicsError ? (
						classics && classics.length > 0 ? (
							classics?.map((classic) => (
								<WorkItem key={classic.id} classic={classic} />
							))
						) : (
							<p className="text-gray-800">아직 등록된 작품이 없어요!</p>
						)
					) : (
						<p className="text-gray-800">
							작품을 불러오지 못했습니다. 연결 상태가 정상일 경우 잠시 후 다시
							시도해 주세요.
						</p>
					)}
				</section>
			</section>
		</div>
	);
}

function ComposerCard({ composer }: { composer: Composer }) {
	return (
		<div className={styles.composerCard}>
			<Image
				fill
				src={composer.image_url}
				alt={`${composer.name_kr}의 프로필`}
				className="w-full h-full"
			/>
		</div>
	);
}

function ComposerInfoList({ composer }: { composer: Composer }) {
	const infoList = [
		{ 국적: composer.nationality },
		{ 출생: composer.birth_date },
		{ 사망: composer.death_date },
		{ 시대: composer.period },
		{ 스타일: composer.style },
	];

	return (
		<ul className={styles.composerInfo}>
			<li className="font-semibold text-center">{composer.name}</li>
			<li className="font-semibold text-center border-b pb-2 sm:pb-1">
				{composer.name_kr}
			</li>
			{infoList.map((data, index) => (
				<li key={index} className="pt-2 sm:pt-1 last:pb-1 px-1">
					{Object.entries(data).map(([key, value], index) => (
						<p key={index}>
							<span className="font-semibold">{key} | </span>
							{value}
						</p>
					))}
				</li>
			))}
		</ul>
	);
}

function WorkItem({ classic }: { classic: Classic }) {
	return (
		<Link
			key={classic.id}
			href={`/classics/${classic.id}`}
			className={styles.workItem}
		>
			<p className="font-semibold overflow-hidden whitespace-nowrap truncate">
				{classic.title}
			</p>
			<p className="text-sm">
				{classic.description.length > 100
					? `${classic.description.substring(0, 100)}..`
					: classic.description}
			</p>
			<ul className={`flex flex-wrap items-center gap-1`}>
				{classic.tags.map((tag) => (
					<li
						key={tag}
						className="rounded-sm text-sm bg-black/95 text-white px-1 mt-1"
					>
						{tag}
					</li>
				))}
			</ul>
		</Link>
	);
}
