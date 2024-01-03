export default async function ProfilePage() {
	// const supabase = createServerClient();

	// const [{ data: likes, error: likesError }] = await Promise.all([
	// 	supabase
	// 		.from("classical_music_likes")
	// 		.select()
	// 		.eq("user_id", params?.userId)
	// 		.order("created_at", { ascending: false })
	// 		.range(0, 10),
	// ]);

	return (
		<div className="">
			<section className="">
				<div className="flex items-center justify-between">
					<h2 className="text-lg sm:text-xl font-semibold">최근 활동</h2>
				</div>
				<ul className="p-1 rounded-sm mt-2 h-92 overflow-y-scroll profile-scrollbar bg-white/40">
					{[].map((item, i) => (
						<li
							key={i}
							className="w-full transition-all border-b last:border-b-0 bg-white"
						></li>
					))}
				</ul>
			</section>
		</div>
	);
}
