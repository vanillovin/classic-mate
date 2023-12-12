"use client";

import ClassicItem from "./ClassicalMusicItem";

function ClassicalMusicList({
	classicalMusicList,
}: { classicalMusicList: Classic[] }) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 p-1">
			{classicalMusicList?.map((classicalMusic) => (
				<ClassicItem
					key={classicalMusic.id}
					classicalMusic={classicalMusic}
					likeCount={classicalMusic.like_count}
				/>
			))}
		</div>
	);
}

export default ClassicalMusicList;
