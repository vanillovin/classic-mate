"use client";

import ClassicItem from "./ClassicalMusicItem";

function ClassicalMusicList({ classics }: { classics: Classic[] }) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 p-1">
			{classics?.map((classic) => (
				<ClassicItem
					key={classic.id}
					classic={classic}
					likeCount={classic.like_count}
				/>
			))}
		</div>
	);
}

export default ClassicalMusicList;
